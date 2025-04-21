import React from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthModal } from '../../context/AuthModalContext';
import { useUser } from '../../context/UserContext';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const modalContext = useAuthModal();
  const { user, logout } = useUser()|| {}; 
  const navigate = useNavigate();

  const handlePostProperty = () => {
    if (user) {
      navigate('/post-property'); // or open a modal instead
    } else {
      modalContext?.openLogin();
    }
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-700">
            RealtyHub
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/buy" className="text-gray-700 hover:text-blue-600">
              Buy Property
            </Link>

            <Link to="/wishlist" className="text-gray-700 hover:text-blue-600">
              Wishlist
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
                >
                  <img
                    src={user.avatarUrl || `https://ui-avatars.com/api/?name=${user.name}`}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{user.name}</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
                    <button
                      onClick={() => {
                        logout?.();  // Safe call for logout
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={modalContext?.openLogin}
                  className="text-gray-700 hover:text-blue-600"
                >
                  Login
                </button>
                <button
                  onClick={modalContext?.openRegister}
                  className="text-gray-700 hover:text-blue-600"
                >
                  Register
                </button>
              </div>
            )}

            <button
              onClick={handlePostProperty}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Post Property FREE
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/buy" className="block text-gray-700 hover:text-blue-600">Buy Property</Link>
          <Link to="/wishlist" className="block text-gray-700 hover:text-blue-600">Wishlist</Link>
          <hr />
          {user ? (
            <>
              <p className="text-gray-700 font-medium">{user.name}</p>
              <button
                onClick={logout}
                className="block w-full text-left text-gray-700 hover:text-blue-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={modalContext?.openLogin}
                className="block w-full text-left text-gray-700 hover:text-blue-600"
              >
                Login
              </button>
              <button
                onClick={modalContext?.openRegister}
                className="block w-full text-left text-gray-700 hover:text-blue-600"
              >
                Register
              </button>
            </>
          )}
          <button
            onClick={handlePostProperty}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
          >
            Post Property FREE
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
