import React from "react";
import { BackgroundBeamsWithCollision } from "../Components/ui/BackgroundBeamsWithCollision";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 
        className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight"
        style={{ fontFamily: "'PT Sans', sans-serif" }} // Aplicando la fuente solo a este elemento
      >
        P A T I O{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-[#5993b5] via-[#76AACB] to-[#396078] [text-shadow:0_0_rgba(0,0,0,0.1)]"></div>
          <div 
            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#6bb1d6] via-[#447893] to-[#245f7f] py-4"
            style={{ fontFamily: "'PT Sans', sans-serif" }} // Aplicando la fuente solo a este texto específico
          >
            <span>P A D E L</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
