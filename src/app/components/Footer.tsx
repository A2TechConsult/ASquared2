import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
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
                      to="/healthcare"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sap-managed-services"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      SAP Managed Services
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
