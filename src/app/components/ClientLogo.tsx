import { motion } from 'motion/react';

interface ClientLogoProps {
  src: string;
  alt: string;
  url: string;
  className?: string;
}

export function ClientLogo({ src, alt, url, className = '' }: ClientLogoProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center p-6 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <img
        src={src}
        alt={alt}
        className="h-20 w-auto max-w-full object-contain transition-opacity duration-300 hover:opacity-80"
      />
    </motion.a>
  );
}