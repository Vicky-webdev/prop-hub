import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useToast } from '../../context/ToastContext'; // Import the useToast hook

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
  switchToRegister: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, onClose, switchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { addToast } = useToast(); // Get the addToast function from context

  if (!show) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // handle login logic
      console.log('Login:', { email, password });
      setErrors({});

      // Show success toast
      addToast('Login successful!');

      // Close the modal after login
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl animate-slideUp">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <div className="flex items-center border px-3 py-2 rounded">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full focus:outline-none"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="flex items-center border px-3 py-2 rounded">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full focus:outline-none"
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button type="submit" className="btn-primary w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          New here?{' '}
          <button onClick={switchToRegister} className="text-blue-600 hover:underline">
            Create an account
          </button>
        </p>

        <button onClick={onClose} className="text-sm text-gray-500 mt-4 hover:text-red-500 block mx-auto">
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
