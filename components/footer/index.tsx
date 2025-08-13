import { Logo, FooterLogo } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faLinkedinIn, 
  faInstagram, 
  faTwitter ,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';

const manrope = localFont({
  src: "../../font/Manrope/Manrope-VariableFont_wght.ttf",
  display: "swap",
});

export default function YemmarFooter() {
  return (
    <footer className={`text-white justify-center flex w-full  ${manrope.className}`}>
      <div className="max-w-7xl w-full flex flex-col p-6 sm:p-8 md:p-10 rounded-[20px] sm:rounded-[25px] md:rounded-[30px] justify-center bg-[#2F3134]">
        
        {/* Main Content Section */}
        <div className="flex w-full justify-between max-w-6xl flex-col md:flex-row mb-8 sm:mb-10 md:mb-12 gap-8 md:gap-0">
          
          {/* Logo Section */}
          <div className="w-full md:w-[70%] flex justify-start">
            <div className='w-[250px]'>
            <Image src={FooterLogo} className="" alt="logo" />

            </div>
          </div>

          {/* Navigation and Contact Section */}
          <div className="w-full md:w-[30%] text-white">
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between gap-6 sm:gap-8">
              
              {/* Navigation Links */}
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <nav className="flex flex-col space-y-2 sm:space-y-3">
                  <Link href="#" className="text-sm sm:text-base hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                  <Link href="#" className="text-sm sm:text-base hover:text-white transition-colors duration-200">
                    Corporate
                  </Link>
                  <Link href="#" className="text-sm sm:text-base hover:text-white transition-colors duration-200">
                    Business Sector
                  </Link>
                  <Link href="#" className="text-sm sm:text-base hover:text-white transition-colors duration-200">
                    Vision & Mission
                  </Link>
                </nav>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <div>
                  <a 
                    href="mailto:headoffice@yemmar.com" 
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-sm sm:text-base break-all sm:break-normal"
                  >
                    headoffice@yemmar.com
                  </a>
                </div>
                <div className="text-sm sm:text-base">
                  <div className="mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm">SA: </span>
                    <span>+966 54 138 3220</span>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <span className="ml-4 sm:ml-6">+966 50 6984310</span>
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm">IN: </span>
                    <span>+91 87108 08080</span>
                  </div>
                  <div>
                    <span className="ml-4 sm:ml-5">+91 81578 68080</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row w-full items-center gap-4 sm:gap-0">
          
          {/* Copyright */}
          <div className="w-full sm:w-[80%] text-center sm:text-left">
            <p className="text-white text-xs sm:text-sm">
              Yemmer Group © 2024 All rights reserved. Privacy Policy
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="w-full sm:w-[20%] flex justify-center sm:justify-between px-2  gap-4 sm:gap-5">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 flex-shrink-0"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 flex-shrink-0"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 flex-shrink-0"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 flex-shrink-0"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 sm:w-6 sm:h-6" />
              {/* <FontAwesomeIcon icon="fa-brands fa-x-twitter"    className="w-5 h-5 sm:w-6 sm:h-6"  /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}