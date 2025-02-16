import React, { useState, useEffect } from "react";
import { Heart, ShoppingCart, Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply theme to the root element (navbar only)
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={`bg-slate-300 bg-opacity-60 backdrop-blur-md shadow-lg ${theme === "dark" ? "dark:bg-gray-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center relative group">
            <img
              src="/images/logo.png"
              alt="Brand Logo"
              className="h-16 w-16 group-hover:opacity-100 transition-opacity bg-transparent"
            />
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="ml-10 flex items-baseline space-x-4">
              {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About Us' }, { to: '/contact', label: 'Contact Us' }, { to: '/blogs', label: 'Blogs' }, { to: '/login', label: 'Login/Signup' }, { to: '/productPage', label: 'Products' }]
                .map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `relative px-3 py-2 rounded-md text-sm font-medium overflow-hidden transition-all duration-700 shadow-md ${isActive ? "bg-black text-white dark:bg-slate-600" : "text-black dark:text-white"} hover:bg-slate-600 hover:text-white`
                    }
                  >
                    <span className="relative z-10">{link.label}</span>
                  </NavLink>
                ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-black dark:text-white hover:bg-slate-600 hover:text-white dark:hover:bg-slate-700 focus:outline-none transition-colors shadow-md"
            >
              {theme === "light" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
            </button>
            <button className="ml-4 p-2 rounded-full text-black dark:text-white hover:bg-slate-600 hover:text-white dark:hover:bg-slate-700 focus:outline-none transition-colors shadow-md">
              <Heart className="h-6 w-6" />
            </button>
            <button className="ml-4 p-2 rounded-full text-black dark:text-white hover:bg-slate-600 hover:text-white dark:hover:bg-slate-700 focus:outline-none transition-colors shadow-md">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:bg-slate-600 hover:text-white dark:hover:bg-slate-700 focus:outline-none transition-colors shadow-md"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[{ href: '/', label: 'Home' }, { href: '/about', label: 'About Us' }, { href: '/contact', label: 'Contact Us' }, { href: '/productPage', label: 'Products' }, { href: '/login', label: 'Login' }, { href: '/blogs', label: 'Blogs' }]
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative block px-3 py-2 rounded-md text-base font-medium text-black dark:text-white overflow-hidden transition-all duration-700 hover:bg-slate-600 hover:text-white shadow-md"
                >
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
