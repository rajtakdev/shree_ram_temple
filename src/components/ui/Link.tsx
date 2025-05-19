import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClass?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  activeClass = '',
  onClick
}) => {
  const isActive = window.location.pathname === href;
  const baseClasses = 'font-medium transition-colors hover:text-orange-600';
  
  return (
    <a 
      href={href}
      className={`${baseClasses} ${className} ${isActive ? activeClass : ''}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};