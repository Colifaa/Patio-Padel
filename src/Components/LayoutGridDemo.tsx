"use client";
import React from "react";
import { LayoutGrid } from "../Components/ui/LayoutGrid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full mb-32 ">
      {/* Título de bienvenida */}
      <h1 className="font-bold text-4xl text-center text-black mb-2 relative">
        Bienvenido a tu lugar para disfrutar del pádel
      </h1>

      {/* Descripción opcional */}
      <p className="text-center text-2xl text-black font-semibold mb-12 relative">
        Reserva tu cancha de pádel en un par de clics y vive la experiencia
        deportiva más divertida y activa.
      </p>

      {/* Componente de cuadrícula con imágenes */}
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Cancha de pádel al aire libre
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Disfruta de una partida en una cancha de pádel al aire libre, rodeado
        de naturaleza y buen ambiente. ¡El lugar perfecto para jugar con amigos!
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Cancha cubierta para días lluviosos
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        No dejes que la lluvia te detenga. Nuestras canchas cubiertas te
        permiten jugar al pádel en cualquier momento, sin importar el clima.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        ¡Tu cancha ideal te está esperando!
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Encuentra la cancha de pádel que mejor se adapta a tus necesidades y
        disfruta de un juego inigualable. Reserva ahora y asegura tu lugar.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Para todos los niveles de juego
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Ya seas principiante o experto, tenemos canchas diseñadas para todos los
        niveles. ¡Ven y mejora tu juego con nosotros!
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/PETRTNQVQBHJRCDS3B6RF7IJK4.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://www.clarin.com/2023/06/15/1RvszVBvt_1200x0__1.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFkZWwlMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://image.ondacero.es/clipping/cmsimages01/2023/02/20/526A565C-3746-4398-BB66-775878C43364/estos-son-beneficios-salud-jugar-padel-segun-experto_98.jpg?crop=1280,720,x0,y133&width=1900&height=1069&optimize=high&format=webply",
  },
];
