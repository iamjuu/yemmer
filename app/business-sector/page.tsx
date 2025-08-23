import React, { useState, useEffect } from "react";
import YemmarFooter from "@/components/footer";
import Navbar from "@/components/navbar";
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
  BusinessImage5,
} from "@/public";
import Image from "next/image";

// Shimmer component
const Shimmer = ({ className }: { className: string }) => (
  <div className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] ${className}`}>
    <div className="animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent h-full w-full"></div>
  </div>
);

const businessSectors = [
  {
    id: 1,
    title: "Retail",
    icon: Cart,
    items: ["Supermarkets", "Hypermarkets"],
  },
  {
    id: 2,
    title: "Manufacturing",
    icon: Settings,
    items: ["Textiles", "Electronics"],
  },
  {
    id: 3,
    title: "Distribution",
    icon: Loory,
    items: ["Hospitals", "Clinics"],
  },
  {
    id: 4,
    title: "Hospitality",
    icon: Search,
    items: ["Schools", "Universities"],
  },
];

const Images = [
  {
    id: 1,
    image: BusinessImage5,
   
  },
  {
    id: 2,
    image: BusinessImage2,

  },
  {
    id: 3,
    image: BusinessImage3,
 
  },
  {
    id: 4,
    image: BusinessImage4,
   
  },
].reverse();


const page = () => {
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});
  const [sectorImagesLoaded, setSectorImagesLoaded] = useState<{ [key: number]: boolean }>({});

  const handleImageLoad = (id: number, type: 'business' | 'sector') => {
    if (type === 'business') {
      setImagesLoaded(prev => ({ ...prev, [id]: true }));
    } else {
      setSectorImagesLoaded(prev => ({ ...prev, [id]: true }));
    }
  };

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

      {/* images  */}

      <div className="w-full px-2 md:px-3  ">
        <div className="max-w-7xl mx-auto">
          <div className="pb-[44px]">
            <button className="text-[26px] font-[300] px-[44px] py-[10px] border-2 border-gray-300 rounded-full text-gray-700 text-sm sm:text-base  hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
            Business Sector
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Images.map((item) => (
              <div
                key={item.id}
                className="relative w-[300px] h-[400px] mx-auto overflow-hidden   delay-300 hover:scale-110 transition-all duration-300 rounded-lg"
              >
                {/* Shimmer loading state */}
                {!imagesLoaded[item.id] && (
                  <Shimmer className="absolute inset-0 w-full h-full" />
                )}
                
                <Image
                  src={item.image}
                  alt={`Business sector ${item.id}`}
                  fill
                  className={`object-cover transition-opacity duration-300 ${imagesLoaded[item.id] ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => handleImageLoad(item.id, 'business')}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  {/* <h3 className="text-xl font-semibold text-center">{item.title}</h3> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-2 md:px-3 pt-[150px] md:pt-[0px] pb-[150px]">
        <div className="max-w-7xl mx-auto">
          <div className="pt-[150px] pb-[80px] ">
            <button className="text-[26px] font-[300] px-[32px] py-[10px] border-2 border-gray-300 rounded-full text-gray-700 text-sm sm:text-base  hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              Yemmar Industries
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessSectors.map((sector) => (
              <div key={sector.id} className="w-full">
                <div className="flex justify-center flex-col gap-[10px] items-center relative">
                  <div className="w-[65px] h-[65px] relative">
                    {/* Shimmer loading state for icon */}
                    {!sectorImagesLoaded[sector.id] && (
                      <Shimmer className="absolute inset-0 w-[65px] h-[65px] rounded-full" />
                    )}
                    
                    <Image
                      src={sector.icon}
                      alt={sector.title}
                      width={100}
                      height={100}
                      className={`transition-opacity duration-300 ${sectorImagesLoaded[sector.id] ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => handleImageLoad(sector.id, 'sector')}
                    />
                  </div>
                  <div className="relative">
                    <h1 className="font-[300] text-center text-[32px]">
                      {sector.title}
                    </h1>
                    {sector.items.map((item, index) => (
                      <p
                        key={index}
                        className="text-[22px] leading-[22px] text-center font-[300]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
<div className="mb-[10px] md:mb-[76px]">

      <YemmarFooter />
</div>
    </div>
  );
};

export default page;
