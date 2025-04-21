// src/components/layout/Layout.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import { useAuthModal } from '../../context/AuthModalContext';
import { UserProvider } from '../../context/UserContext';
import SearchBar from '../SearchFilterBar';
import propertyData from '../../data/mockProperties.json';
import { Property } from '../../types/types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const modalContext = useAuthModal();
  const navigate = useNavigate();
  const location = useLocation();

  const [properties, setProperties] = useState<Property[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    setProperties(propertyData as Property[]);
  }, []);

  const handleSearch = (filters: {
    location: string;
    propertyType: string;
    bhk: string;
    minBudget: string;
    maxBudget: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (filters.location) searchParams.append('location', filters.location);
    if (filters.propertyType) searchParams.append('propertyType', filters.propertyType);
    if (filters.bhk) searchParams.append('bhk', filters.bhk);
    if (filters.minBudget) searchParams.append('minBudget', filters.minBudget);
    if (filters.maxBudget) searchParams.append('maxBudget', filters.maxBudget);

    navigate(`/results?${searchParams.toString()}`);
  };

  const handleSubmitSearch = (title: string) => {
    if (title) {
      navigate(`/results?query=${encodeURIComponent(title)}`);
    }
  };

  const isResultsPage = location.pathname.startsWith("/results");

  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        {!isResultsPage && (
          <div className="sticky top-16 z-40 bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <SearchBar
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
                onSubmit={handleSubmitSearch}
                suggestions={properties.slice(0, 5)}
              />
            </div>
          </div>
        )}
        <main className="flex-1">{children}</main>
        <Footer />
        {modalContext && (
          <>
            <LoginModal
              show={modalContext.showLogin}
              onClose={modalContext.closeModals}
              switchToRegister={modalContext.switchToRegister}
            />
            <RegisterModal
              show={modalContext.showRegister}
              onClose={modalContext.closeModals}
              switchToLogin={modalContext.switchToLogin}
            />
          </>
        )}
      </div>
    </UserProvider>
  );
};

export default Layout;
