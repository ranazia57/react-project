import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer className="bg-slate-800 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">About Us</h3>
            <p className="text-sm">
              Aura by AZ will be recognized as an online fragrances market.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[#1DA1F2] transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-[#E4405F] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/Blogs" className="hover:text-white transition-colors">Blogs</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
              <li><Link to="/ProductPage" className="hover:text-white transition-colors">Products</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaPhone size={16} />
                <span>+92-306-9580053</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaWhatsapp size={16} className="text-green-500" />
                <span>+92-311-6586081</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope size={16} />
                <span>ziauldinrajpoot@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt size={16} />
                <span>Sahiwal, Punjab, Pakistan.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates and exclusive offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-black transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Aura by AZ. All rights reserved.
          </p>
        </div>
      </div>

      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 cursor-pointer p-2 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-600 transition-colors"
        >
          <FaChevronUp size={24} />
        </div>
      )}
    </footer>
  );
};

export default Footer;
