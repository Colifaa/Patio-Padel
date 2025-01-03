import React from "react";
import { Vortex } from "../Components/ui/Vortex";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={50}
        baseHue={130}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Sobre Nosotros
        </h2>
        <p className="text-white text-xl md:text-2xl max-w-xl mt-6 text-center">
        En Patio Padel, ofrecemos un espacio único para disfrutar
             de este deporte, con canchas de primer nivel
              y un ambiente ideal pensado para todos.
        </p>
   
      </Vortex>
    </div>
  );
}
