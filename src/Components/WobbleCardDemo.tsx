"use client";
import { Image } from '@chakra-ui/react';
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Tarjeta 1 */}
      <WobbleCard
    containerClassName="col-span-1 lg:col-span-2 h-full bg-[url('https://media.istockphoto.com/id/1080225792/es/foto/juego-de-padel-de-sportsman.jpg?s=2048x2048&w=is&k=20&c=RSluLs5ELZRhyDfoVpAcObGvo8eYr1XPcCHIXNnFei8=')] bg-cover bg-center min-h-[500px] lg:min-h-[300px]"
        className=""
        
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            ¡Disfruta del mejor pádel!
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Nuestras canchas cuentan con instalaciones de primera calidad y un
            ambiente vibrante para todos los jugadores, desde principiantes
            hasta profesionales.
          </p>
        </div>
    
      </WobbleCard>

      {/* Tarjeta 2 */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[url('https://media.gettyimages.com/id/1386823572/es/foto/paddle-tennis-racket-in-court-padel-tournament.jpg?s=612x612&w=0&k=20&c=JB9_eSR6iRRCnXChOodZGpa1eIqrNGQYGzdx4PgcHh4=')] bg-cover bg-center">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Clases y Torneos
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Únete a nuestras clases para mejorar tu técnica o participa en
          emocionantes torneos para competir con los mejores.
        </p>
      </WobbleCard>

      {/* Tarjeta 3 */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[url('https://media.gettyimages.com/id/1473484607/es/foto/j%C3%B3venes-jugando-al-padel-tennis.jpg?s=612x612&w=0&k=20&c=bobo3NbiZ8ymuhi2ugGu5CSQ8frtiZ7KVJYY4cof8pc=')] bg-cover bg-center min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Reserva tu cancha fácilmente
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Usa nuestra plataforma en línea para reservar tu cancha en solo unos
            clics. ¡Es rápido, sencillo y cómodo!
          </p>
        </div>
        <Image
          src="/images/padel-players-2.jpg" // Cambia esta ruta a tu imagen
          width={500}
          height={500}
          alt="Partido de pádel"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
