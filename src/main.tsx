import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import Layout from './components/layouts/Layout.tsx';
import { ToastProvider } from './context/ToastContext.tsx';
import { AuthModalProvider } from './context/AuthModalContext';
import { UserProvider } from './context/UserContext.tsx'; // ✅ import UserContext

import { Provider } from 'react-redux';
import { store } from './store';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/base.css';
import './index.css';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider> {/* ✅ Wrap here for mock auth */}
          <AuthModalProvider>
            <ToastProvider>
              <Layout>
                <App />
              </Layout>
            </ToastProvider>
          </AuthModalProvider>
        </UserProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
