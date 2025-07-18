"use client";
import { useState } from 'react';
import Link from 'next/link';
import Button from '../btn';
import { Menu, X, Home, Building2, Briefcase, Target, Phone } from 'lucide-react';
import { Logo } from '@/public';
import Image from 'next/image';
const navLinks = [
  { href: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
  { href: "/corporate", label: "Corporate", icon: <Building2 className="w-5 h-5" /> },
  { href: "/business-sector", label: "Business Sector", icon: <Briefcase className="w-5 h-5" /> },
  { href: "/vision-mission", label: "Vision & Mission", icon: <Target className="w-5 h-5" /> },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full   bg-white  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="logo" width={100} height={100} />
            
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
              className="flex items-center  px-4 py-1 border border-gray-300 rounded-[8px] text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium transition-all duration-200"
            >
              {/* <Phone className="w-4 h-4" /> */}
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-[8px] text-gray-700 hover:text-gray-900 hover:bg-gray-100"
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