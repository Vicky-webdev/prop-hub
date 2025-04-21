import React, { createContext, useContext, useState } from 'react';

interface AuthModalContextType {
  showLogin: boolean;
  showRegister: boolean;
  openLogin: () => void;
  openRegister: () => void;
  closeModals: () => void;
  switchToRegister: () => void;
  switchToLogin: () => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export const AuthModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const openRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const switchToRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  return (
    <AuthModalContext.Provider
      value={{
        showLogin,
        showRegister,
        openLogin,
        openRegister,
        closeModals,
        switchToRegister,
        switchToLogin,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

// ✅ Returns `null` if not used inside the provider (no error thrown)
export const useAuthModal = (): AuthModalContextType | null => {
  const context = useContext(AuthModalContext);
  if (!context) {
    console.warn('⚠️ useAuthModal must be used within an AuthModalProvider');
    return null;
  }
  return context;
};
