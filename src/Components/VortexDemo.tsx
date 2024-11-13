import React from "react";
import { Vortex } from "../Components/ui/Vortex";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden  ">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={50}
        baseHue={130}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full "
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Bienvenido a Patio Padel
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Disfruta de la mejor experiencia en nuestras canchas. Donde la pasión por el pádel se encuentra con la diversión. ¡Aquí comienza tu juego!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 ">
          <button className="px-4 py-2 text-white border border-white hover:bg-white hover:text-black transition duration-200 rounded-lg ">
            Conoce más sobre nosotros
          </button>
        </div>
      </Vortex>
    </div>
  );
}
