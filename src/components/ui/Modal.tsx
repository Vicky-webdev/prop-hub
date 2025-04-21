// src/components/ui/Modal.tsx
import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-lg relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 text-xl">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
