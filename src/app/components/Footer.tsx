import sapLogo from '../../assets/c9abc9544e6f5a5b70e5eec942b60f8010decd05.png';
import vistexLogo from '../../assets/0e35773da41fd1c0fdd252643e1eeeaab9fa05a2.png';
import plexLogo from '../../assets/7de126a42128b3415fbb82c656b7d3d3e3e932bd.png';
import siebelLogo from '../../assets/b90c03a57ba77a183f10ad49c663a6b123f7f0e0.png';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      {/* Technology Partners - Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
            Technology Partners
          </div>
          <div className="w-12 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-16 mb-8">
          <a 
            href="https://www.sap.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100"
          >
            <img 
              src={sapLogo}
              alt="SAP" 
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
            />
          </a>
          <a 
            href="https://www.vistex.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100"
          >
            <img 
              src={vistexLogo}
              alt="Vistex" 
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
            />
          </a>
          <a 
            href="https://www.rockwellautomation.com/en-us/products/software/plex.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            <img 
              src={plexLogo}
              alt="Plex" 
              className="h-8 w-auto object-contain" 
            />
          </a>
          <a 
            href="https://www.oracle.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 hover:scale-105 opacity-60 hover:opacity-100"
          >
            <img 
              src={siebelLogo}
              alt="Siebel" 
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
            />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Top Section - Brand & Links */}
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <div className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
                ASquared Technologies
              </div>
              <p className="text-sm text-gray-500 max-w-md leading-relaxed mb-8">
                SAP-centric consulting for enterprises that value precision over noise.
              </p>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-widest text-gray-400">
                  Locations
                </div>
                <div className="text-sm text-gray-600 space-y-1 mt-3">
                  <div>San Francisco, California</div>
                  <div>Hyderabad, India</div>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="md:col-span-7 grid grid-cols-3 gap-8">
              {/* Company */}
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-6">
                  Company
                </div>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      to="/" 
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/approach" 
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Our Approach
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/outcomes" 
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Client Outcomes
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-6">
                  Services
                </div>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      to="/capabilities" 
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Capabilities
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/ai-capabilities" 
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      AI Capabilities
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/staff-augmentation" 
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Staff Augmentation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-6">
                  Legal
                </div>
                <ul className="space-y-4">
                  <li>
                    <Link 
                      to="/privacy" 
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/terms" 
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/cookies" 
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Cookies
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/confidentiality" 
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Confidentiality
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xs text-gray-400">
                © {new Date().getFullYear()} ASquared Technologies. All rights reserved.
              </div>
              <div className="text-xs text-gray-400">
                Enterprise SAP consulting with precision.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
