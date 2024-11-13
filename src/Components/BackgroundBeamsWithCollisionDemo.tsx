import React from "react";
import { BackgroundBeamsWithCollision } from "../Components/ui/BackgroundBeamsWithCollision";


export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="relative z-20 flex justify-center items-center w-full h-full">
        <img
          src="PATIO_PADEL_LOGO_BLACK_BG-removebg-preview (1).png" 
          alt="Logo"
          className="max-w-full max-h-full object-contain"
        />
      </div>
 
    </BackgroundBeamsWithCollision>
  );
}
