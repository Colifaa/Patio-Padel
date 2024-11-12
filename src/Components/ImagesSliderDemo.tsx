"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../Components/ui/ImagesSlider";
import { VortexDemo } from "./VortexDemo";

export function ImagesSliderDemo() {
  const images = [
    "https://img.freepik.com/foto-gratis/gente-jugando-al-padel-dentro_23-2149444608.jpg",
    "https://media.istockphoto.com/id/1402900022/es/foto/pareja-jugando-a-p%C3%A1del-en-corte.jpg?s=612x612&w=0&k=20&c=AtlchuPsY0RNFtgy5a1nxBEWrAhsTCGuZqrvuvsEsZI=",
    "https://www.vallparc.com/wp-content/uploads/2022/05/Mask-group-18.png",
  ];
  return (
    <ImagesSlider className="h-[40rem] bg-black" images={images}>
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
        className="z-50 flex flex-col justify-center items-center w-full h-full"  // Aquí se ajusta a tamaño completo
      >
        <VortexDemo />
      </motion.div>
    </ImagesSlider>
  );
}
