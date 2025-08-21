import { Sponser1, Sponser2, Sponser3, Sponser4, Sponser5, Sponser6 } from '@/public';
import Image from 'next/image'
import React from 'react'

const index = () => {
    
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

  return (
    <div className="w-full px-2 md:px-3 ">
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
  )
}

export default index
