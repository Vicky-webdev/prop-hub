import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Undo2 } from "lucide-react";

interface SnackbarUndoProps {
  message: string;
  onUndo: () => void;
  onClose: () => void;
  visible: boolean;
}

const SnackbarUndo = ({ message, onUndo, onClose, visible }: SnackbarUndoProps) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white rounded-xl shadow-lg px-6 py-4 z-50 flex items-center gap-4 w-[95%] max-w-md"
        >
          <Undo2 className="text-yellow-400 w-5 h-5" />
          <span className="flex-1">{message}</span>
          <button
            onClick={() => {
              onUndo();
              onClose();
            }}
            className="text-yellow-300 font-semibold hover:underline"
          >
            Undo
          </button>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SnackbarUndo;
