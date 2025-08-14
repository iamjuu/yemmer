import React from "react";
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
} from "@/public";
import Image from "next/image";

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
    image: BusiessIMage1,
    title: "Distribution",
  },
  {
    id: 2,
    image: BusinessImage2,
    title: "Hospitality",
  },
  {
    id: 3,
    image: BusinessImage3,
    title: "Retail",
  },
  {
    id: 4,
    image: BusinessImage4,
    title: "Real Estate & Construction",
  },
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
      className="min-h-screen  "
    >
      <Navbar />

      {/* images  */}

      <div className="w-full px-2 md:px-3 pt-[50px] pb-[50px]">
        <div className="max-w-7xl mx-auto">
          <div className="pb-[92px]">
            <button className="text-[26px] font-[300] px-[32px] py-[10px] border-2 border-gray-300 rounded-full text-gray-700 text-sm sm:text-base  hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
            Business Sector
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Images.map((item) => (
              <div
                key={item.id}
                className="relative w-[300px] h-[400px] mx-auto overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
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
          <div className="py-[100px]">
            <button className="text-[26px] font-[300] px-[32px] py-[10px] border-2 border-gray-300 rounded-full text-gray-700 text-sm sm:text-base  hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              Yemmar Industries
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessSectors.map((sector) => (
              <div key={sector.id} className="w-full">
                <div className="flex justify-center flex-col items-center">
                  <div className="w-[65px] h-[65px]">
                    <Image
                      src={sector.icon}
                      alt={sector.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <h1 className="font-[300] text-center text-[40px]">
                      {sector.title}
                    </h1>
                    {sector.items.map((item, index) => (
                      <p
                        key={index}
                        className="text-[22px] text-center font-[300]"
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

      <YemmarFooter />
    </div>
  );
};

export default page;
