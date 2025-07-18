import React from "react";
import Navbar from "@/components/navbar";
import { Banner } from "@/public";
import localFont from "next/font/local";
import Button from "@/components/btn";
import { ChevronRight, MoveRight } from "lucide-react";

const manrope = localFont({
  src: "../../font/Manrope/Manrope-VariableFont_wght.ttf",
  display: "swap",
});

// NOTE: The following types and data are mocked to fix compilation errors
// and allow the component to render. The original data fetching logic was broken.
type AppSetting = {
  _id?: string;
  DEFAULT_PRIMARY_COLOUR?: string;
  DEFAULT_PRIMARY_BASE?: string;
  primaryColour?: string;
  primaryBase?: string;
  primaryDarker?: string;
  primaryDark?: string;
  primaryLighter?: string;
  primaryLightest?: string;
  event?: {
    themeColor?: string;
    themeTextColor?: string;
  };
  franchise?: any;
};

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--primary-base)] rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-move-random"></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full filter blur-xl opacity-5 animate-pulse animation-delay-4000`}
        ></div>
        <div
          className={`absolute bottom-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full filter blur-xl opacity-5 animate-pulse animation-delay-4000`}
        ></div>
      </div>
      <Navbar />

      {/* **************hero section***************** */}
      <div className="w-full py-10 ">
        <div
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[500px] bg-cover bg-center rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-full flex justify-start items-end">
            <div className="w-[80%]  py-16 px-10">
              <h1
                className={`${manrope.className} text-white font-[400] 
    text-[28px] leading-[32px] sm:text-[35px] sm:leading-[40px] 
    md:text-[45px] md:leading-[50px] lg:text-[55px] lg:leading-[60px] 
    xl:text-[65px] xl:leading-[68px] 2xl:text-[70px] 2xl:leading-[72px]`}
              >
                <span>From Supermarkets to</span>
                <br />
                <span>
                  Real Estate — Diversified Excellence
                  <span className="text-yellow-400"> Since 1995.</span>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ****************about section***************** */}

      <div className=" w-full  py-2 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* About Button */}
          <div className="py-5">
            <Button className="px-10 py-1 border-2 border-gray-300 rounded-full text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              About
            </Button>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Heading */}
            <h1
              className={`${manrope.className}
          text-[30px] md:text-[50px] font-light leading-tight`}
            >
              <span className="text-yellow-500 font-medium">Yemmar Group</span>
              <span className="text-gray-800 ">
                {" "}
                is an example of a business group with diversified investments
                since 1995 in Saudi Arabia and India.
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-[22px] leading-relaxed max-w-2xl">
              With interests in multiple sectors, including supermarkets,
              restaurants, real estate, plumbing and electrical, restaurants,
              product businesses, furniture retail stores, hookah essentials
              retail.
            </p>

            {/* Read More Link */}
            <div className="pt-4">
              <Button
                
                className="inline-flex gap items-center text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200"
              >
                Read More
                <MoveRight  className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
