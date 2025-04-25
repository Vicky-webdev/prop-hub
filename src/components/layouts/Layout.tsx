import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginModal from "../auth/LoginModal";
import RegisterModal from "../auth/RegisterModal";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "../SearchFilterBar";
import propertyData from "../../data/mockProperties.json";
import { useAuthModal } from "../../context/AuthModalContext";
import { UserProvider } from "../../context/UserContext";
import { Property } from "../../types/types";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const modalContext = useAuthModal();
  const navigate = useNavigate();
  const location = useLocation(); // <-- NEW: detects current route

  const [properties, setProperties] = useState<Property[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const loadedProperties = propertyData as Property[];
    setProperties(loadedProperties);
  }, []);

  const handleSearch = (filters: {
    location: string;
    propertyType: string;
    bhk: string;
    minBudget: string;
    maxBudget: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (filters.location) searchParams.append("location", filters.location);
    if (filters.propertyType) searchParams.append("propertyType", filters.propertyType);
    if (filters.bhk) searchParams.append("bhk", filters.bhk);
    if (filters.minBudget) searchParams.append("minBudget", filters.minBudget);
    if (filters.maxBudget) searchParams.append("maxBudget", filters.maxBudget);

    navigate(`/results?${searchParams.toString()}`);
  };

  const handleSubmitSearch = (title: string) => {
    if (title) {
      navigate(`/results?query=${encodeURIComponent(title)}`);
    }
  };

  // 🔍 Only show sticky SearchBar if not on /results route
  // const isResultsPage = location.pathname === "/results";
  const isResultsPage = location.pathname === "/results" || location.pathname === "/results-sidebar";


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

<main className={`flex-1 ${isResultsPage ? '' : ''}`}>
  {children}
</main>
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
