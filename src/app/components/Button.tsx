import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  to, 
  type = 'button',
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-4 text-sm font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800',
    secondary: 'border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  };

  // External link
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  // Internal link
  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={combinedClassName}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // Button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
