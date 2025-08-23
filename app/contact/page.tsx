"use client";

import React from "react";
import YemmarFooter from "@/components/footer";
import Navbar from "@/components/navbar";
import Button from "@/components/btn";
import GoogleMapComponent from "@/components/GoogleMap";
import {
  Cart,
  Loory,
  Mainbg,
  Search,
  Settings,
  BusiessIMage1,
  BusinessImage2,
  BusinessImage3,
  BusinessImage4,
} from "@/public";
import Image from "next/image";


const locations = [
  {
    id: 1,
    city: "Riyadh",
    cityArabic: "الرياض",
    location: "Applain(Sheesa) Al-Muhammadiya",
    coordinates: { lat: 24.7136, lng: 46.6753 },
    link: "https://www.google.com/maps/search/?api=1&query=24.7136,46.6753"
  },
  {
    id: 2,
    city: "Jeddah",
    cityArabic: "جدة",
    location: "Applain(Sheesa) Al-Muhammadiya",
    coordinates: { lat: 21.4858, lng: 39.1925 },
    link: "https://www.google.com/maps/search/?api=1&query=21.4858,39.1925"
  },
  {
    id: 3,
    city: "Calicut",
    cityArabic: "كوزيكود",
    location: "Applain(Sheesa) Al-Muhammadiya",
    coordinates: { lat: 11.2588, lng: 75.7804 },
    link: "https://www.google.com/maps/search/?api=1&query=11.2588,75.7804"
  },
  {
    id: 4,
    city: "Calicut",
    cityArabic: "كوزيكود",
    location: "Applain(Sheesa) Al-Muhammadiya",
    coordinates: { lat: 11.2588, lng: 75.7804 },
    link: "https://www.google.com/maps/search/?api=1&query=11.2588,75.7804"
  },
  {
    id: 5,
    city: "Dammam",
    cityArabic: "الدمام",
    location: "Applain(Sheesa) Al-Khobar",
    coordinates: { lat: 26.4207, lng: 50.0888 },
    link: "https://www.google.com/maps/search/?api=1&query=26.4207,50.0888"
  },
  {
    id: 6,
    city: "Mecca",
    cityArabic: "مكة المكرمة",
    location: "Applain(Sheesa) Al-Haram",
    coordinates: { lat: 21.4225, lng: 39.8262 },
    link: "https://www.google.com/maps/search/?api=1&query=21.4225,39.8262"
  },
  {
    id: 7,
    city: "Medina",
    cityArabic: "المدينة المنورة",
    location: "Applain(Sheesa) Al-Masjid",
    coordinates: { lat: 24.5247, lng: 39.5692 },
    link: "https://www.google.com/maps/search/?api=1&query=24.5247,39.5692"
  },
  {
    id: 8,
    city: "Abha",
    cityArabic: "أبها",
    location: "Applain(Sheesa) Al-Sahab",
    coordinates: { lat: 18.2164, lng: 42.5053 },
    link: "https://www.google.com/maps/search/?api=1&query=18.2164,42.5053"
  },
  {
    id: 9,
    city: "Tabuk",
    cityArabic: "تبوك",
    location: "Applain(Sheesa) Al-Faisaliyah",
    coordinates: { lat: 28.3835, lng: 36.5664 },
    link: "https://www.google.com/maps/search/?api=1&query=28.3835,36.5664"
  },
  {
    id: 10,
    city: "Jizan",
    cityArabic: "جيزان",
    location: "Applain(Sheesa) Al-Corniche",
    coordinates: { lat: 16.8894, lng: 42.5706 },
    link: "https://www.google.com/maps/search/?api=1&query=16.8894,42.5706"
  },
  {
    id: 11,
    city: "Najran",
    cityArabic: "نجران",
    location: "Applain(Sheesa) Al-Khalij",
    coordinates: { lat: 17.5656, lng: 44.2289 },
    link: "https://www.google.com/maps/search/?api=1&query=17.5656,44.2289"
  },
  {
    id: 12,
    city: "Al-Ahsa",
    cityArabic: "الأحساء",
    location: "Applain(Sheesa) Al-Hofuf",
    coordinates: { lat: 25.3832, lng: 49.5877 },
    link: "https://www.google.com/maps/search/?api=1&query=25.3832,49.5877"
  },
  {
    id: 13,
    city: "Al-Kharj",
    cityArabic: "الخرج",
    location: "Applain(Sheesa) Al-Dawadmi",
    coordinates: { lat: 24.1554, lng: 47.3346 },
    link: "https://www.google.com/maps/search/?api=1&query=24.1554,47.3346"
  },
  {
    id: 14,
    city: "Al-Qassim",
    cityArabic: "القصيم",
    location: "Applain(Sheesa) Buraydah",
    coordinates: { lat: 26.3360, lng: 43.9632 },
    link: "https://www.google.com/maps/search/?api=1&query=26.3360,43.9632"
  },
  {
    id: 15,
    city: "Al-Baha",
    cityArabic: "الباحة",
    location: "Applain(Sheesa) Al-Malqa",
    coordinates: { lat: 20.0129, lng: 41.4677 },
    link: "https://www.google.com/maps/search/?api=1&query=20.0129,41.4677"
  },
  {
    id: 16,
    city: "Al-Jouf",
    cityArabic: "الجوف",
    location: "Applain(Sheesa) Sakaka",
    coordinates: { lat: 29.9697, lng: 40.1064 },
    link: "https://www.google.com/maps/search/?api=1&query=29.9697,40.1064"
  },
  {
    id: 17,
    city: "Hail",
    cityArabic: "حائل",
    location: "Applain(Sheesa) Al-Nuzha",
    coordinates: { lat: 27.5119, lng: 41.7208 },
    link: "https://www.google.com/maps/search/?api=1&query=27.5119,41.7208"
  },
  {
    id: 18,
    city: "Al-Qunfudhah",
    cityArabic: "القنفذة",
    location: "Applain(Sheesa) Al-Balad",
    coordinates: { lat: 19.1263, lng: 41.0788 },
    link: "https://www.google.com/maps/search/?api=1&query=19.1263,41.0788"
  },
  {
    id: 19,
    city: "Al-Lith",
    cityArabic: "الليث",
    location: "Applain(Sheesa) Al-Corniche",
    coordinates: { lat: 20.1633, lng: 40.2883 },
    link: "https://www.google.com/maps/search/?api=1&query=20.1633,40.2883"
  },
  {
    id: 20,
    city: "Al-Rabigh",
    cityArabic: "رابغ",
    location: "Applain(Sheesa) Al-Balad",
    coordinates: { lat: 22.7986, lng: 39.0348 },
    link: "https://www.google.com/maps/search/?api=1&query=22.7986,39.0348"
  },
  {
    id: 21,
    city: "Al-Taif",
    cityArabic: "الطائف",
    location: "Applain(Sheesa) Al-Hada",
    coordinates: { lat: 21.2703, lng: 40.4158 },
    link: "https://www.google.com/maps/search/?api=1&query=21.2703,40.4158"
  },
  {
    id: 22,
    city: "Al-Khafji",
    cityArabic: "الخفجي",
    location: "Applain(Sheesa) Al-Corniche",
    coordinates: { lat: 28.4391, lng: 48.4913 },
    link: "https://www.google.com/maps/search/?api=1&query=28.4391,48.4913"
  },
  {
    id: 23,
    city: "Al-Nairiyah",
    cityArabic: "النعيرية",
    location: "Applain(Sheesa) Al-Balad",
    coordinates: { lat: 27.4708, lng: 48.4758 },
    link: "https://www.google.com/maps/search/?api=1&query=27.4708,48.4758"
  },
  {
    id: 24,
    city: "Al-Rass",
    cityArabic: "الرس",
    location: "Applain(Sheesa) Al-Balad",
    coordinates: { lat: 25.8511, lng: 43.5222 },
    link: "https://www.google.com/maps/search/?api=1&query=25.8511,43.5222"
  },
  {
    id: 25,
    city: "Unaizah",
    cityArabic: "عنيزة",
    location: "Applain(Sheesa) Al-Balad",
    coordinates: { lat: 26.0859, lng: 43.9877 },
    link: "https://www.google.com/maps/search/?api=1&query=26.0859,43.9877"
  },
  {
    id: 26,
    city: "Al-Majmaah",
    cityArabic: "المجمعة",
    location: "Applain(Sheesa) Al-Balad",
    coordinates: { lat: 25.9033, lng: 45.3453 },
    link: "https://www.google.com/maps/search/?api=1&query=25.9033,45.3453"
  },
  {
    id: 27,
    city: "Al-Zulfi",
    cityArabic: "الزلفي",
    location: "Applain(Sheesa) Al-Balad",
    coordinates: { lat: 26.2994, lng: 44.8154 },
    link: "https://www.google.com/maps/search/?api=1&query=26.2994,44.8154"
  },
  {
    id: 28,
    city: "Al-Ghat",
    cityArabic: "الغاط",
    location: "Applain(Sheesa) Al-Balad",
    coordinates: { lat: 26.1500, lng: 44.9667 },
    link: "https://www.google.com/maps/search/?api=1&query=26.1500,44.9667"
  },
  {
    id: 29,
    city: "Al-Diriyah",
    cityArabic: "الدرعية",
    location: "Applain(Sheesa) Al-Balad",
    coordinates: { lat: 24.7333, lng: 46.5833 },
    link: "https://www.google.com/maps/search/?api=1&query=24.7333,46.5833"
  },
  {
    id: 30,
    city: "Al-Kharj",
    cityArabic: "الخرج",
    location: "Applain(Sheesa) Al-Sulaimi",
    coordinates: { lat: 24.1554, lng: 47.3346 },
    link: "https://www.google.com/maps/search/?api=1&query=24.1554,47.3346"
  }
];

const page = () => {
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
      <div className="w-full pt-[40px] mb-[76px]  sm:pt-[60px] px-4 sm:px-6 md:px-8 lg:pt-[150px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8">
            {/* Left Section - Contact Information */}
            <div className="w-full lg:w-[40%] order-2 lg:order-1">
              {/* Contact Us Button */}
              <div className="mb-[40px] sm:mb-[50px] lg:mb-[70px]">
                <Button className="px-[24px] sm:px-[28px] lg:px-[34px] py-[8px] sm:py-[10px] border border-gray-300 rounded-[25px] text-gray-600 hover:border-gray-400 transition-colors text-sm sm:text-base">
                  Contact Us
                </Button>
              </div>

              {/* Phone Numbers */}
              <div className="flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[46px]">
                <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-0">
                  <div>
                    <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-[300]">
                      {" "}
                      <span className="text-[18px] sm:text-[22px] lg:text-[26px] font-[300]">
                        SA:
                      </span>{" "}
                      +966 54 138 3220
                    </p>
                    <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-[300]">
                      +966 50 6984310
                    </p>
                  </div>

                  <div>
                    <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-[300]">
                      {" "}
                      <span className="text-[18px] sm:text-[22px] lg:text-[26px] font-[300]">
                        IN:
                      </span>{" "}
                      +91 87108 08080
                    </p>
                    <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-[300]">
                      +91 81578 68080
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-[30px] sm:mb-[40px] lg:mb-[46px] flex flex-col gap-[2px]">
                  <span className="text-[18px] sm:text-[22px] lg:text-[26px] font-[300]">
                    Email:
                  </span>
                  <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-[300]">
                    {" "}
                    headoffice@yemmar.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="w-full lg:w-[60%] order-1 lg:order-2">
              <form className="">
                {/* First Row */}
                <div className="flex flex-col gap-[40px] sm:gap-[56px] lg:gap-[72px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-blue-300 focus:border-blue-500 outline-none bg-transparent text-gray-600 placeholder-gray-400 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-blue-300 focus:border-blue-500 outline-none bg-transparent text-gray-600 placeholder-gray-400 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-blue-300 focus:border-blue-500 outline-none bg-transparent text-gray-600 placeholder-gray-400 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Feedback Type"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-blue-300 focus:border-blue-500 outline-none bg-transparent text-gray-600 placeholder-gray-400 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* Third Row - Message */}
                  <div className="">
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b-2 border-blue-300 focus:border-blue-500 outline-none bg-transparent text-gray-600 placeholder-gray-400 resize-none text-sm sm:text-base"
                    ></textarea>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      type="submit"
                      className="px-[18px] sm:px-[22px] py-[5px] border border-gray-300 rounded-[25px] text-gray-600 hover:border-gray-400 transition-colors text-sm sm:text-base"
                    >
                      Submit
                    </Button>
                    <Button
                      type="reset"
                      className="px-[18px] sm:px-[22px] py-[5px] border border-gray-300 rounded-[25px] text-gray-600 hover:border-gray-400 transition-colors text-sm sm:text-base"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* main btn  */}
      <div className="w-full mb-[76px]  sm:pt-[60px] px-4 sm:px-6 md:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-[40px] sm:mb-[50px] lg:mb-[70px]">
            <Button className="px-[24px] sm:px-[28px] lg:px-[34px] py-[8px] sm:py-[10px] border border-gray-300 rounded-[25px] text-gray-600 hover:border-gray-400 transition-colors text-sm sm:text-base">
              Location
            </Button>
          </div>
        </div>
      </div>
      
      {/* main location  */}
      <div className="w-full mb-[76px] sm:pt-[60px]">
        <div className="relative   w-full mb-[76px] sm:pt-[60px] px-4 sm:px-6 md:px-8 max-w-7xl mx-auto h-[392px]">
          <iframe
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${locations[0].coordinates.lng-0.01},${locations[0].coordinates.lat-0.01},${locations[0].coordinates.lng+0.01},${locations[0].coordinates.lat+0.01}&layer=mapnik&marker=${locations[0].coordinates.lat},${locations[0].coordinates.lng}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </div>

      {/* location btn  */}
      <div className="w-full mb-[76px]  sm:pt-[60px] px-4 sm:px-6 md:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-[40px] sm:mb-[50px] lg:mb-[70px]">
            <Button className="px-[24px] sm:px-[28px] lg:px-[34px] py-[8px] sm:py-[10px] border border-gray-300 rounded-[25px] text-gray-600 hover:border-gray-400 transition-colors text-sm sm:text-base">
              Location
            </Button>
          </div>
        </div>
      </div>
      
      <div className="w-full mb-[76px] sm:pt-[60px] px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {locations.map((location) => (
              <div 
                key={location.id} 
                className="rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => window.open(location.link, '_blank')}
              >
                <div className="relative h-48">
                  <iframe
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.coordinates.lng-0.01},${location.coordinates.lat-0.01},${location.coordinates.lng+0.01},${location.coordinates.lat+0.01}&layer=mapnik&marker=${location.coordinates.lat},${location.coordinates.lng}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 text-start">
                    {location.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <YemmarFooter />
    </div>
  );
};

export default page;
