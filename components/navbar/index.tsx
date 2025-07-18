"use client";
import { useState } from 'react';
import Link from 'next/link';
import Button from '../btn';
import { Menu, X, Home, Building2, Briefcase, Target, Phone } from 'lucide-react';

const navLinks = [
  { href: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
  { href: "/corporate", label: "Corporate", icon: <Building2 className="w-5 h-5" /> },
  { href: "/business-sector", label: "Business Sector", icon: <Briefcase className="w-5 h-5" /> },
  { href: "/vision-mission", label: "Vision & Mission", icon: <Target className="w-5 h-5" /> },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                {/* Circular logo background */}
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">YR</span>
                </div>
                {/* Small circular accent */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-800 rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-gray-800 tracking-wide">YEMMAR</span>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col space-y-2 px-4 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;