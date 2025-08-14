"use client";

import YemmarFooter from "@/components/footer";
import {
  ArabicPic,
  Mainbg,
  YemmarBg,
  SectionCard,
  SectionOne,
  Sponser1,
  Sponser2,
  Sponser3,
  Sponser4,
  Sponser5,
  Sponser6,
  Sponser7,
} from "@/public";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import localFont from "next/font/local";
import Button from "@/components/btn";
import { MoveRight } from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";

const montserrat = localFont({
  src: "../../font/Montserrat/Montserrat-VariableFont_wght.ttf",
  display: "swap",
});

const page = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Initialize AOS with responsive settings
    AOS.init({
      duration: 1000,
      mirror: true,
      disable: function () {
        return window.innerWidth < 768;
      },
      startEvent: "DOMContentLoaded",
      offset: 120,
      delay: 150,
    });
  }, []);



  const testimonials = [
    {
      id: 1,
      text: "Business is not only about closing transactions; business is about having excellent products, doing amazing engineering and giving. Lastly, business is a web of human relationships.",
      author: "Muneer V.K",
      title: "Chairman & Director",
    },
    {
      id: 2,
      text: "I have the pleasure of working with the team at Vemmar group for for several years now, and I can honestly say that their new, each can honestly say that their satisfaction and professionalism is second to none. They truly care about their clients and are always willing to go above and beyond to ensure that their needs are met.",
      author: "Muhammed Munees",
      title: "General Manager",
    },
  ];

  const sponser = [
    {
      id: 1,
      image: Sponser1,
    },
    {
      id: 2,
      image: Sponser2,
    },
    {
      id: 3,
      image: Sponser3,
    },
    {
      id: 4,
      image: Sponser4,
    },
    {
      id: 5,
      image: Sponser5,
    },
    {
      id: 6,
      image: Sponser6,
    },
    {
      id: 7,
      image: Sponser7,
    },
  ];

  // Infinite scroll effect
  useEffect(() => {
    const scrollContainer = document.getElementById('infinite-scroll');
    if (scrollContainer) {
      const scroll = () => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      };
      
      const interval = setInterval(scroll, 30); // Smooth scroll speed
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${Mainbg.src})`,
        backgroundPosition: "bottom",
        backgroundSize: "full",
        backgroundRepeat: "repeat",
      }}
      className="min-h-screen  "
    >
      <Navbar />

      {/* Hero section - Keep animations on all screens */}
      <div className="w-full  z-[-1]  px-2 md:px-3">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-mirror="true"
          data-aos-disable="false"
          className="relative w-full flex z-[-1] h-full justify-end max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[600px] bg-cover bg-center rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${YemmarBg.src})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full   flex ">
            <div className="w-full h-full sm:w-[90%] md:w-[85%] flex items-end justify-end lg:w-[80%] py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-6 md:px-8 lg:px-10">
              <h1
                className={`${montserrat.className} text-white font-[400] 
              text-[20px] leading-[24px] 
                sm:text-[28px] sm:leading-[32px] 
                md:text-[42px] md:leading-[46px] 
                lg:text-[52px] lg:leading-[56px] 
                xl:text-[62px] xl:leading-[66px] 
                2xl:text-[70px] 2xl:leading-[72px]`}
              >
                <span className="block">From Supermarkets to</span>
                <span className="block mt-1 sm:mt-2">
                  Real Estate — Diversified Excellence
                  <span className="text-yellow-400 text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px] xl:text-[62px] 2xl:text-[70px] font-[500]">
                    {" "}
                    Since 1995.
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* About section - Only animate on desktop */}
      <div className="w-full pt-[60px] px-2 md:px-3 md:pt-[150px]">
        <div className="max-w-6xl mx-auto">
          {/* About Button */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-mirror="true"
            className="pb-[44px]"
          >
            <Button
              className={`px-6  ${montserrat.className} sm:px-10 py-1 border-2 border-gray-300 rounded-full text-gray-700 text-sm sm:text-base font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200`}
            >
              About
            </Button>
          </div>

          {/* Main Content */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-mirror="true"
            className="space-y-4 sm:space-y-8"
          >
            {/* Heading */}
            <h1
              className={`${montserrat.className}
          text-[24px] sm:text-[30px] md:text-[50px] font-light leading-tight`}
            >
              <span className="text-yellow-500 font-medium">Yemmar Group</span>
              <span className={`text-gray-800   ${montserrat.className} `}>
                is an example of a business group with diversified investments
                since 1995 in Saudi Arabia and India.
              </span>
            </h1>

            {/* Description */}
            <div>
              <p
                className={`text-gray-600 text-[16px] sm:text-[18px] md:text-[22px]  ${montserrat.className} leading-relaxed `}
              >
                With interests in multiple sectors, including supermarkets,
                restaurants, real estate, plumbing and electrical, restaurants,
                product businesses, furniture retail stores, hookah essentials
                retail.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed ">
                  Yemmar group has established a significant presence in both
                  countries and has become a well - respected player in the
                  regional business landscape.
                </p>
                <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed ">
                  In the supermarket sector, Yemmar Group owns and operates
                  several supermarkets under the name Amana Foodstuff Markets,
                  providing a wide range of products and service to customers
                  across Saudi Arabia. Our plumbing and electrical business is
                  also a major player in both markets, offering high - quality
                  products and services to both residential and commrcial
                  customers. our product business is involved in the
                  manufacturing and distribution of a variety of milk-based
                  products in the bangalore market.
                </p>
                <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed ">
                  Our furniture retail store is the city's largest and also a
                  popular destination for customers looking for stylish and
                  affordable home furnishings.
                </p>
                <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed ">
                  Finally, our real estate division has developed and managed a
                  range of commercial and residential properties, including
                  office buildings, shopping centres, residential developments,
                  and resort projects.
                </p>
                <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed w-full">
                  Yemmar Group has maintained a strong focus on quality,
                  innovation, and customer service. Our commitment to excellence
                  has helped us build a loyal customer base and establish
                  ourselves as a trusted and respected business group in both
                  Saudi Arabia and India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor section - Simplified animation on mobile */}
      <div className="w-full px-2 md:px-3 pt-[150px] md:pt-[0px] pb-[150px]">
        <div className="max-w-7xl mx-auto">
          <div className="py-[100px]">

          <button className="text-[26px] font-[300] px-[32px] py-[10px] border-2 border-gray-300 rounded-full text-gray-700 text-sm sm:text-base  hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
            Investments & Ventures
          </button>
          </div>

                     {/* Infinite Scroll Container */}
           <div className="relative overflow-hidden">
             <div 
               id="infinite-scroll"
               className="flex gap-8 items-center py-8"
               style={{
                 width: 'max-content',
                 animation: 'scroll 30s linear infinite'
               }}
             >
               {/* First set of sponsors */}
               {sponser.map((sponser, index) => (
                 <div 
                   key={`first-${sponser.id}`}
                   className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex justify-center items-center"
                 >
                   <Image
                     src={sponser.image}
                     alt="sponser"
                     className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
                   />
                 </div>
               ))}
               
               {/* Duplicate set for seamless loop */}
               {sponser.map((sponser, index) => (
                 <div 
                   key={`second-${sponser.id}`}
                   className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex justify-center items-center"
                 >
                   <Image
                     src={sponser.image}
                     alt="sponser"
                     className="w-full h-full object-contain transition-all duration-300 hover:scale-110"
                   />
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="w-full">
        <YemmarFooter />
      </div>
    </div>
  );
};

export default page;
