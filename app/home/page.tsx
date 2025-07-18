import React from "react";
import Navbar from "@/components/navbar";
import { Banner } from "@/public";
import localFont from "next/font/local";

const manrope = localFont({
  src: "../../font/Manrope/Manrope-VariableFont_wght.ttf",
  display: "swap",
});

const page = () => {
  return (
    <div>
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
                className={`${manrope.className} text-white text-[70px] leading-[72px] font-[400]`}
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
    </div>
  );
};

export default page;
