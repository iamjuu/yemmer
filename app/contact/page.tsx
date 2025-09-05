"use client";

import React, { useState } from "react";
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
];

// Separate arrays for each tab
const centralRegionLocations = [
  locations[0], // Riyadh
  locations[1]  // Jeddah
];

const easternRegionLocations = [
  locations[4],  // Dammam
  locations[11]  // Al-Ahsa
];

const westernRegionLocations = [
  locations[5], // Mecca
  locations[6]  // Medina
];

const southernRegionLocations = [
  locations[7],  // Abha
  locations[9],  // Jizan
  locations[10]  // Najran
];

const internationalLocations = [
  locations[2], // Calicut (first location)
  locations[3], // Calicut (second location)
  locations[8]  // Tabuk
];

// Tab data structure with locations organized by tabs
const tabsData = [
  {
    id: 1,
    name: "Central Region",
    locations: centralRegionLocations
  },
  {
    id: 2,
    name: "Eastern Region", 
    locations: easternRegionLocations
  },
  {
    id: 3,
    name: "Western Region",
    locations: westernRegionLocations
  },
  {
    id: 4,
    name: "Southern Region",
    locations: southernRegionLocations
  },
  {
    id: 5,
    name: "International",
    locations: internationalLocations
  }
];

const page = () => {
  const [activeTab, setActiveTab] = useState(1);

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
        <div className="relative   w-full mb-[76px] sm:pt-[60px]  max-w-7xl mx-auto h-[392px]">
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
      {/* <div className="w-full mb-[76px]  sm:pt-[60px] px-4 sm:px-6 md:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="mb-[40px] sm:mb-[50px] lg:mb-[70px]">
            <Button 
            className="px-[24px] sm:px-[28px] lg:px-[34px] py-[8px] sm:py-[10px] border border-gray-300 rounded-[25px] text-gray-600 hover:border-gray-400 transition-colors text-sm sm:text-base">
            Alpine Branches
            </Button>
          </div>
        </div>
      </div> */}

      {/* Tab Navigation */}
      <div className="w-full mb-[40px] px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-between">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-[24px] sm:px-[28px] lg:px-[34px] py-[8px] sm:py-[10px] border border-gray-300 rounded-[25px] text-gray-600 hover:border-gray-400 transition-colors text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'bg-[#2f3134] text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-300 hover:border-gray-400 hover:shadow-md'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dynamic Maps Grid */}
      <div className="w-full mb-[76px] sm:pt-[60px] px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {tabsData.find(tab => tab.id === activeTab)?.locations.map((location) => (
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
