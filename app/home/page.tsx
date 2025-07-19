import React from "react";
import Navbar from "@/components/navbar";
import { Banner ,SectionCard,SectionOne, Sponser1, Sponser2, Sponser3, Sponser4, Sponser5, Sponser6} from "@/public";
import localFont from "next/font/local";
import Button from "@/components/btn";
import { ChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import YemmarFooter from "@/components/footer";

const manrope = localFont({
  src: "../../font/Manrope/Manrope-VariableFont_wght.ttf",
  display: "swap",
});

// NOTE: The following types and data are mocked to fix compilation error

const page = () => {

  const testimonials = [
    {
      id: 1,
      text: "Business is not only about closing transactions; business is about having excellent products, doing amazing engineering and giving. Lastly, business is a web of human relationships.",
      author: "Muneer V.K",
      title: "Chairman & Director"
    },
    {
      id: 2,
      text: "I have the pleasure of working with the team at Vemmar group for for several years now, and I can honestly say that their new, each can honestly say that their satisfaction and professionalism is second to none. They truly care about their clients and are always willing to go above and beyond to ensure that their needs are met.",
      author: "Muhammed Munees",
      title: "General Manager"
    }
  ];

const sponser = [
  {
    id: 1,
    image: Sponser1
  },
  {
    id: 2,
    image: Sponser2
  },
  {
    id: 3,
    image: Sponser3
  },
  {
    id: 4,
    image: Sponser4
  },
  {
    id: 5,
    image: Sponser5
  },
  {
    id: 6,
    image: Sponser6
  }
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white">
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--primary-base)] rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-move-random"></div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full filter blur-xl opacity-5 animate-pulse animation-delay-4000`}
        ></div>
        <div
          className={`absolute bottom-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full filter blur-xl opacity-5 animate-pulse animation-delay-4000`}
        ></div>
      </div> */}
      <Navbar />

      {/* **************hero section***************** */}
      <div className="w-full py-10 px-2 md:px-0 ">
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

      <div className=" w-full  px-2 md:px-0  py-2 md:py-12">
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

      {/* *******************sponser section***************** */}
      <div className="w-full px-2 py-12 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-end justify-items-center">
            {sponser.map((sponser) => (
              <Image key={sponser.id} src={sponser.image} alt="sponser" />
            ))}
          </div>
      </div>
      </div>

      {/* ****************business sector section***************** */}
      <div className="w-full px-2  py-12 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  ">
          
          {/* Left side - Image with overlay */}
          <div className="relative  ">
            <div className="relative  overflow-hidden rounded-2xl ">
              <Image src={SectionOne} alt="section one" />
            </div>
          </div>

          {/* Right side - Statistics cards */}
          <div className="flex flex-col space-y-6 h-full">
            
            {/* Total Retail Space Card */}
            <div className="bg-white flex  flex-col justify-center items-start rounded-2xl p-8 shadow-sm border border-gray-100 flex-1">
              <div className="text-4xl lg:text-5xl font-light text-gray-800 mb-2">
                30000+ <span className="text-gray-600">sq.mtr</span>
              </div>
              <div className="text-gray-500 text-lg">
                Total Retail Space
              </div>
            </div>

            {/* Bottom row - Employees and Stores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Employees Card */}
              <div className="bg-[#FFCB05] rounded-2xl p-8 shadow-sm">
                <div className="text-[50px]  font-light text-white mb-2">
                  250+
                </div>
                <div className="text-white text-[30px] font-medium">
                  Employees
                </div>
              </div>

              {/* Retail Stores Card */}
              <div className="bg-gray-800 rounded-2xl p-8 shadow-sm">
                <div className="text-[50px] font-light text-white mb-2">
                  35+
                </div>
                <div className="text-white text-[30px] font-medium">
                  Retail Stores
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ***********************our business section***************** */}

    <div className="py-12 px-2 md:px-0 ">
      <div className="max-w-6xl mx-auto  ">
        {/* Testimonials Grid */}
        <div className="flex flex-col md:flex-row md:justify-between   md:gap-10 gap-0">
          {/* CMD Message */}
          <div
            key={testimonials[0].id}
            className="w-full md:w-[60%] rounded-2xl relative min-h-64 flex flex-col p-8"
          >
            <h1 className="md:text-[35px] font-light mb-6">
              CMD'S
              <br />
              Message
            </h1>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-16">
              {testimonials[0].text}
            </p>

            <div className="absolute bottom-8 left-8 md:left-10">
              <h3 className="text-lg font-medium text-gray-800 mb-1">
                {testimonials[0].author}
              </h3>
              <p className="text-sm text-gray-600">{testimonials[0].title}</p>
            </div>
          </div>

          {/* General Testimonial */}
          <div
            key={testimonials[1].id}
            className="w-full md:w-[40%] rounded-2xl relative  justify-center md:justify-end items-center md:items-end flex flex-col p-8"
          >
         <Image src={SectionCard}   className="md:w-72 w-34   " alt="section card" />
          </div>
        </div>
      </div>
    </div>

    {/* ***********************footer section***************** */}

    <div className="w-full px-2 py-12 md:px-0">
      <YemmarFooter />
    </div>

    </div>
  );
};

export default page;
