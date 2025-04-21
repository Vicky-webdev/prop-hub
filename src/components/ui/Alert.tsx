// src/components/ui/Alert.tsx
const Alert = ({ message, type = 'info' }: { message: string; type?: 'info' | 'warning' | 'error' }) => {
    const base = 'p-4 rounded-md text-sm font-medium';
    const typeStyles = {
      info: 'bg-blue-100 text-blue-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
    };
  
    return <div className={`${base} ${typeStyles[type]}`}>{message}</div>;
  };
  
  export default Alert;
  