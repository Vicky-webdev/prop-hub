import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface SnackbarMessageProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

const SnackbarMessage = ({ message, visible, onClose }: SnackbarMessageProps) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 3000);
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
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-800 text-white rounded-xl shadow-lg px-6 py-4 z-50 flex items-center gap-4 w-[95%] max-w-md"
        >
          <Heart className="text-pink-400 w-5 h-5" />
          <span className="flex-1">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SnackbarMessage;
