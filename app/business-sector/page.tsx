import React from "react";
import YemmarFooter from "@/components/footer";
import Navbar from "@/components/navbar";
import { Cart, Mainbg } from "@/public";
import Image from "next/image";

const businessSectors = [
  {
    id: 1,
    title: "Retail",
    icon: Cart,
    items: ["Supermarkets", "Hypermarkets"]
  },
  {
    id: 2,
    title: "Manufacturing",
    icon: Cart,
    items: ["Textiles", "Electronics"]
  },
  {
    id: 3,
    title: "Distribution",
    icon: Cart,
    items: ["Hospitals", "Clinics"]
  },
  {
    id: 4,
    title: "Hospitality",
    icon: Cart,
    items: ["Schools", "Universities"]
  }
];

const page = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Mainbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <Navbar />

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
                    <h1 className="font-[300] text-center text-[40px]">{sector.title}</h1>
                    {sector.items.map((item, index) => (
                      <p key={index} className="text-[22px] text-center font-[300]">{item}</p>
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
