import React from 'react';

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-md p-6 transition-all hover:shadow-xl">
      {children}
    </div>
  );
};

export default Card;
