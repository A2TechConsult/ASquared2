const logo = "/assets/ASquareTechConsult_logo.png";

import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Overview', path: '/' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'SAP Managed Services', path: '/sap-managed-services' },
    { label: 'Our Approach', path: '/approach' },
    { label: 'Client Outcomes', path: '/outcomes' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (label: string) => {
    if (label === 'SAP Managed Services') {
      setTimeout(() => {
        const el = document.getElementById('sap-managed-services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="relative flex items-center gap-4 group">
              <img
                src={logo}
                alt="ASquared Technologies"
                style={{
                  height: '32px',
                  width: 'auto',
                  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                  transformOrigin: 'top left',
                  zIndex: 50,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(3.75)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />

              <div className="h-6 w-px bg-gray-300"></div>

              <span className="text-sm font-light text-gray-500 tracking-wide transition-colors duration-300 group-hover:text-gray-900">
                ASquared Technologies
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-12">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <li key={item.label} className="relative">
                    <Link
                      to={item.path}
                      onClick={() => handleNavClick(item.label)}
                      className={`text-sm font-normal transition-all duration-300 relative inline-block ${
                        isActive
                          ? 'text-gray-900'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-2 left-0 right-0 h-px bg-gray-900"
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-[73px] left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-40 md:hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-8">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.path;

                    return (
                      <li key={item.label}>
                        <Link
                          to={item.path}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            handleNavClick(item.label);
                          }}
                          className={`block px-4 py-4 text-base ${
                            isActive
                              ? 'text-gray-900 bg-gray-50 font-medium'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
