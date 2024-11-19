"use client";
import React from "react";
import { StickyScroll } from "../Components/ui/StickyScroll";
import { Image } from "@chakra-ui/react";


const content = [
  {
    title: "Reserva de Canchas en Tiempo Real",
    description:
      "Disfruta de la facilidad de reservar tu cancha de pádel al instante. Consulta la disponibilidad en tiempo real y asegura tu lugar sin complicaciones. Nuestra plataforma está diseñada para ofrecerte una experiencia rápida y eficiente.",
    content: (
      <div className="h-60 w-60 rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src="https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.jpg?s=612x612&w=0&k=20&c=SKdeeGEcpZIxKbOUeCuEzBHcLD8CUOsNtMsZ-r9rLq4="
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-full"
          alt="gestión de reservas"
        />
      </div>
    ),
  },
  {
    title: "Gestión de Reservas",
    description:
      "Administra tus reservas de manera sencilla. Puedes visualizar, modificar o cancelar tus reservas con unos pocos clics. Nuestra herramienta te permite mantener un control total sobre tus horarios de juego.",
    content: (
      <div className="h-60 w-60 rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/odisseias/image/upload/f_auto,q_auto:best/img/promos/aula-privada-de-padel-lousa-o-bairro-shu2012874119_F.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-full"
          alt="gestión de reservas"
        />
      </div>
    ),
  },
  {
    title: "Actualizaciones en Tiempo Real",
    description:
      "Mantente siempre informado con actualizaciones automáticas. Ya no tendrás que preocuparte por cambios en la disponibilidad o en tus reservas. Todo se sincroniza al instante para que siempre tengas la información más reciente.",
    content: (
      <div className="h-60 w-60 rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src="https://www.timeoutjeddah.com/cloud/timeoutjeddah/2023/02/06/B-Padel1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-full"
          alt="gestión de reservas"
        />
      </div>
    ),
  },
  {
    title: "Optimiza tu Tiempo",
    description:
      "Con nuestra plataforma, ahorras tiempo al evitar llamadas o confusiones con la disponibilidad de las canchas. Todo el proceso está optimizado para que puedas centrarte en lo que realmente importa: disfrutar del pádel.",
    content: (
      <div className="h-60 w-60 rounded-full overflow-hidden flex items-center justify-center">
      <Image
        src="https://www.clarin.com/2023/06/15/1RvszVBvt_360x240__1.jpg"
        className="h-full w-full object-cover"
        alt="gestión de reservas"
      />
    </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
