"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../Components/ui/ImagesSlider";
import { VortexDemo } from "../Components/VortexDemo";

export function ImagesSliderDemo() {

  const handleRedirect = () => {
    window.open("https://atcsports.io/venues/patio-padel-lima", "_blank"); // Abre el enlace en una nueva pestaña
  };

  const images = [
    "Patio/2.jpeg",
    "Patio/1.jpeg",
    "Patio/6.jpeg",
  ];

  return (
    <ImagesSlider  className="h-screen sm:h-80 md:h-[30rem] lg:h-[48rem] bg-black relative overflow-hidden" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="absolute inset-0 z-20 flex justify-center items-center p-4 "
      >
        <div className="max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
          <VortexDemo />

      

        </div>
        
      </motion.div>
      <button
  onClick={handleRedirect} // Añadir la funcionalidad al clic
  className="z-50 relative inline-flex h-12 w-auto active:scale-95 transition-transform overflow-hidden rounded-lg p-[2px] focus:outline-none mt-80"
>
  <span
    className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#555555_0%,#666666_50%,#333333_100%)]"
  ></span>
  <span
     className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#333333] px-6 text-lg font-medium text-white backdrop-blur-[10px] gap-2"
  >
    Reserva ahora
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
      ></path>
    </svg>
  </span>
</button>
    </ImagesSlider>
  );
}
