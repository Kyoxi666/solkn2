import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  children: React.ReactNode;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon = true, className = '', ...props }) => {
  const baseStyles = "group inline-flex items-center justify-between rounded-full px-8 py-4 transition-all duration-300 text-sm font-medium tracking-wide";
  
  const variants = {
    primary: "bg-solkn-dark text-white hover:bg-black",
    secondary: "bg-solkn-lime text-solkn-dark hover:brightness-90",
    outline: "border border-solkn-dark text-solkn-dark hover:bg-solkn-dark hover:text-white",
    dark: "bg-white text-solkn-dark hover:bg-gray-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 group-hover:bg-white/40 transition-colors">
          <ArrowRight className="h-3 w-3" />
        </span>
      )}
    </button>
  );
};

export default Button;