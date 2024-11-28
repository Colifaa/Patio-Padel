"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../Components/ui/ImagesSlider";
import { VortexDemo } from "../Components/VortexDemo";

export function ImagesSliderDemo() {
  const images = [
    "https://img.freepik.com/foto-gratis/gente-jugando-al-padel-dentro_23-2149444608.jpg",
    "https://media.istockphoto.com/id/1402900022/es/foto/pareja-jugando-a-p%C3%A1del-en-corte.jpg?s=612x612&w=0&k=20&c=AtlchuPsY0RNFtgy5a1nxBEWrAhsTCGuZqrvuvsEsZI=",
    "https://www.vallparc.com/wp-content/uploads/2022/05/Mask-group-18.png",
  ];

  return (
    <ImagesSlider className="h-screen sm:h-80 md:h-[30rem] lg:h-[40rem] bg-black relative" images={images}>
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
        className="absolute inset-0 z-20 flex justify-center items-center p-4"
      >
        <div className="max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
          <VortexDemo />
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
