import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 text-sm font-geo tracking-[0.2em] transition-all duration-300 ease-in-out border";
  
  const variants = {
    primary: "bg-[#35473a] text-[#ccb982] border-[#35473a] hover:bg-[#2a382e] hover:text-white",
    outline: "bg-transparent text-[#35473a] border-[#35473a] hover:bg-[#35473a] hover:text-[#ccb982]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
