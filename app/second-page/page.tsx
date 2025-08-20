import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import YemmarFooter from "@/components/footer";
import { Mainbg, Mission, Vession } from "@/public";
import Button from "@/components/btn";
import localFont from "next/font/local";
import Image from "next/image";

const montserrat = localFont({
  src: "../../font/Montserrat/Montserrat-VariableFont_wght.ttf",
  display: "swap",
});

const page = () => {
  // Array containing the data for both sections
  const sectionsData = [
    {
      id: 1,
      buttonText: "Vision",
      content: "At Yemmar Group, our vision is to be a global symbol of excellence and innovation, pioneering trends and setting industry benchmarks. Committed to sustainability and growth, we drive economic and social progress, embrace change, and harness emerging technologies to inspire positive change and greatness.",
      image: Vession,
      imageAlt: "Vision",
      bgColor: "#E9E7E7"
    },
    {
      id: 2,
      buttonText: "Mission",
      content: "At Yemmar Group, our mission is to lead with innovation, integrity, and sustainability, delivering lasting value to stakeholders while fostering strong relationships and positive impact on communities and the environment.",
      image: Mission,
      imageAlt: "Mission",
  
    }
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${Mainbg.src})`,
        backgroundPosition: "bottom",
        backgroundSize: "full",
        backgroundRepeat: "repeat",
      }}
      className="min-h-screen"
    >
      <Navbar />

      {/* Main content section */}
      <div className="w-full pt-[60px] px-2 md:px-3 md:pt-[150px]">
        <div className="max-w-6xl mx-auto">
          {/* Sections loop */}
          {sectionsData.map((section) => (
            <div 
              key={section.id} 
              className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] mb-6 sm:mb-8 md:mb-12"
              style={section.bgColor ? { backgroundColor: section.bgColor } : {}}
            >
              <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
                <div className="w-full lg:w-[60%] flex flex-col order-2 lg:order-1">
                  <div className="mb-6 sm:mb-8 lg:mb-[60px]">
                    <Button
                      children={section.buttonText}
                      className={`px-4 sm:px-6 ${montserrat.className} lg:px-10 py-1 border-2 border-gray-300 rounded-full text-gray-700 text-sm sm:text-base font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200`}
                    />
                  </div>

                  <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-[300] leading-relaxed">
                    "{section.content}"
                  </p>
                </div>

                <div className="w-full lg:w-[40%] order-1 lg:order-2">
                  <div className="w-full rounded-[10px] sm:rounded-[15px] border p-2 sm:p-4 h-[200px] sm:h-[250px] md:h-[300px] lg:h-full">
                    <Image
                      src={section.image}
                      className="w-full h-full rounded-[8px] sm:rounded-[15px] object-cover"
                      alt={section.imageAlt}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer section */}
      <div className="w-full px-2 mb-[10px] md:mb-[76px]">
        <YemmarFooter />
      </div>
    </div>
  );
};

export default page;
