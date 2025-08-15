"use client";

import React from "react";
import Navbar from "@/components/navbar";
import {
  Banner,
  SectionCard,
  SectionOne,
  Sponser1,
  Sponser2,
  Sponser3,
  Sponser4,
  Sponser5,
  Sponser6,
  Sponser7,
  YemmarBg,
  Mainbg,
  ArabicPic,
} from "@/public";
import localFont from "next/font/local";
import Button from "@/components/btn";
import { ChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import YemmarFooter from "@/components/footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import Loader from "@/components/btn/loader";
import Link from "next/link";

const montserrat = localFont({
  src: "../../font/Montserrat/Montserrat-VariableFont_wght.ttf",
  display: "swap",
});

// NOTE: The following types and data are mocked to fix compilation error

const page = () => {
  const [loading, setLoading] = useState(true);
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

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
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
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${Mainbg.src})`,
        backgroundPosition: "bottom",
        backgroundSize: "full",
        backgroundRepeat: "repeat",
      }}
      className="min-h-screen  px-2 "
    >
      <Navbar />

      {/* Hero section - Keep animations on all screens */}
      <div className="w-full  z-[-1]  px-2 md:px-3">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-mirror="true"
          data-aos-disable="false"
          className="relative w-full flex  h-full justify-end max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[600px] bg-cover bg-center rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${YemmarBg.src})`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl"></div>

          <div className="w-full   flex relative z-10">
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
      <div className="w-full pt-[60px] px-2 md:px-3 md:py-[150px]">
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
              {/* First paragraph always visible */}
              <p
                className={`text-gray-600 text-[16px] sm:text-[18px] md:text-[22px]  ${montserrat.className} leading-relaxed `}
              >
                With interests in multiple sectors, including supermarkets,
                restaurants, real estate, plumbing and electrical, restaurants,
                product businesses, furniture retail stores, hookah essentials
                retail.
              </p>

              {/* Read More/Less Button */}
              <div className="pt-4">
                <Link href="/about">
                  <Button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex gap items-center text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200"
                  >
                    Read More
                    <MoveRight
                      className="ml-2 w-4 h-4 transition-transform duration-200 
    "
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor section - Simplified animation on mobile */}
      <div className="w-full px-2 md:px-3 md:pt-[150px] pt-[50px] pb-[50px] md:pb-[150px]">
        <div className="w-full mx-auto">
          <div className="relative overflow-hidden">
            <div
              id="infinite-scroll"
              className="flex gap-[98px] items-center py-8"
              style={{
                width: "max-content",
                animation: "scroll 30s linear infinite",
              }}
            >
              {/* First set of sponsors */}
              {sponser.map((sponser, index) => (
                <div
                  key={`first-${sponser.id}`}
                  className="flex-shrink-0 w-32 h-[78px] md:w-40 md:h-[88px] flex justify-center items-center"
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
                  className="flex-shrink-0 w-32 h-[78px] md:w-40 md:h-[78px] flex justify-center items-center"
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

      {/* Business sector section - Simplified on mobile */}
      <div className="w-full px-2 md:px-3 ">
        <div className="max-w-6xl flex items-center justify-center md:flex-row flex-col mx-auto">
          <div className="flex md:flex-row flex-col w-full justify-between  gap-[23px]">
            {/* Left side - Image with overlay */}
            <div className="flex justify-end  w-[40%]">
              <div className="rounded-2xl">
                <Image
                  data-aos={window.innerWidth >= 768 ? "flip-up" : "fade-in"}
                  data-aos-mirror="true"
                  src={SectionOne}
                  alt="section one"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right side - Statistics cards */}
            <div className="flex flex-col space-y-6  w-[60%]">
              {/* Total Retail Space Card */}
              <div className="flex flex-col   w-full  md:max-w-[693px] max-w-full justify-center items-start rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-sm border border-gray-100 flex-1">
                <div
                  data-aos="flip-down"
                  data-aos-mirror="true"
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-800 mb-1 sm:mb-2"
                >
                  30000+{" "}
                  <span
                    data-aos="fade-up"
                    data-aos-mirror="true"
                    className="text-gray-600"
                  >
                    sq.mtr
                  </span>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-mirror="true"
                  className="text-gray-500 text-sm sm:text-base md:text-lg"
                >
                  Total Retail Space
                </div>
              </div>

              {/* Bottom row - Employees and Stores */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Employees Card */}
                <div
                  data-aos-delay={100}
                  data-aos="flip-down"
                  data-aos-mirror="true"
                  className="bg-[#FFCB05] rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm"
                >
                  <div className="text-[36px] sm:text-[42px] md:text-[50px] font-light text-white mb-2">
                    250+
                  </div>
                  <div
                    data-aos-delay={200}
                    data-aos="flip-up"
                    data-aos-mirror="true"
                    className="text-white text-[24px] sm:text-[26px] md:text-[30px] font-medium"
                  >
                    Employees
                  </div>
                </div>

                {/* Retail Stores Card */}
                <div
                  data-aos-delay={300}
                  data-aos="flip-up"
                  data-aos-mirror="true"
                  className="bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm"
                >
                  <div className="text-[36px] sm:text-[42px] md:text-[50px] font-light text-white mb-2">
                    35+
                  </div>
                  <div
                    data-aos-delay={400}
                    data-aos="flip-down"
                    data-aos-mirror="true"
                    className="text-white text-[24px] sm:text-[26px] md:text-[30px] font-medium"
                  >
                    Retail Stores
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* arabic section  */}
      <div className="w-full px-2 py-[50px] md:py-[150px]">
        <div className="max-w-6xl  md:flex-row flex-col gap-10 flex w-full mx-auto">
          <div className="w-full  md:items-start  items-center justify-center md:justify-start flex">
            <Image
              src={ArabicPic}
              alt="arabic pic"
              className="  w-[200px] md:w-[450px] object-cover"
            />
          </div>
          <div className="w-full flex items-start justify-center ">
            <p className=" text-[14px] md:text-[22px] font-[400]">
              Vision 2030: Our Roadmap to the Future Yemmar Group is aligned
              with Saudi Vision 2030, driving economic diversification, job
              creation, and sustainable development. Through innovation in
              retail, construction, logistics, and services, we enhance
              efficiency and support national progress. Beyond business, we
              create opportunities, empower communities, and help build a
              future-ready Saudi Arabia.
            </p>
          </div>
        </div>
      </div>

      {/* Our business section - Simplified on mobile */}
      <div className="w-full px-2  py-[60px] md:py-[150px]">
        <div className="max-w-6xl mx-auto">
          {/* Testimonials Grid */}
          <div className="flex flex-col md:flex-row md:justify-between md:gap-10 gap-0">
            {/* CMD Message */}
            <div
              data-aos={window.innerWidth >= 768 ? "fade-up" : "fade-in"}
              data-aos-delay={100}
              data-aos-mirror="true"
              key={testimonials[0].id}
              className="w-full md:w-[60%] rounded-2xl relative min-h-[250px] sm:min-h-64 flex flex-col p-4 sm:p-6 md:p-8"
            >
              <h1
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-mirror="true"
                className="text-[24px] sm:text-[28px] md:text-[35px] font-light mb-4 sm:mb-6"
              >
                CMD'S
                <br />
                Message
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-mirror="true"
                className="text-[14px] md:text-[22px] text-gray-700 leading-relaxed mb-12 sm:mb-16"
              >
                {testimonials[0].text}
              </p>

              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 md:left-10">
                <h3
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-mirror="true"
                  className="text-base sm:text-lg font-medium text-gray-800 mb-1"
                >
                  {testimonials[0].author}
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-delay={500}
                  data-aos-mirror="true"
                  className="text-xs sm:text-sm text-gray-600"
                >
                  {testimonials[0].title}
                </p>
              </div>
            </div>

            {/* General Testimonial */}
            <div
              key={testimonials[1].id}
              className="w-full md:w-[40%] rounded-2xl  relative  justify-center md:justify-end items-center md:items-end flex flex-col p-8"
            >
              <Image
                data-aos="zoom-in-up"
                data-aos-delay={600}
                data-aos-mirror="true"
                src={SectionCard}
                className="md:w-72 w-34   "
                alt="section card"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="w-full px-2  mb-[10px] md:mb-[76px]">
        <YemmarFooter />
      </div>
    </div>
  );
};

export default page;
