"use client";
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Button from '../btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '@/public';
import Image from 'next/image';

const navLinks = [
  { href: "/", label: "Home",  },
  { href: "/corporate", label: "Corporate",  },
  { href: "/business-sector", label: "Business Sector", },
  { href: "/vision-mission", label: "Vision & Mission",  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
  }, [])
  return (
    <header className="w-full bg-white px-3 md:px-2">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between  pitems-center pb-[43px]  pt-[37px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex w-[198px] h-[72px] items-center  py-2">
                 <Image 
            data-aos="fade-up"
            data-aos-delay={100}
            src={Logo} alt="logo" width={198} height={72} />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-[72px]">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300"
                data-aos="flip-down"
                data-aos-delay={index * 400}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div
          
          
          className="hidden md:flex items-center"
          data-aos="flip-up"
          data-aos-delay={1000}
          >
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
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop overlay with blur */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden" 
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg z-50">
            <nav className="flex flex-col space-y-2 px-4 pt-2 pb-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  data-aos="flip-down"
                  data-aos-delay={index * 100}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                data-aos="flip-down"
              >
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;