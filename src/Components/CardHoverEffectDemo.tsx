import { Icon } from "@chakra-ui/react";
import { HoverEffect } from "../Components/ui/card-hover-effect";

import {
  FcSportsMode,
  FcBriefcase,
  FcCalendar,
  FcConferenceCall,
  FcGlobe,
} from 'react-icons/fc'

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}


export const projects = [
  {
    heading: "Alquiler de Canchas",
    icon: <Icon as={FcSportsMode} w={10} h={10} />,
    description: "Alquila nuestras canchas de alta calidad para partidos individuales o dobles.",

  },
  {
    heading: "Eventos y Torneos",
    icon: <Icon as={FcCalendar} w={10} h={10} />,
    description: "Participa en nuestros torneos o organiza tu propio evento en nuestras instalaciones.",

  },
  {
    heading: "Clases de Pádel",
    icon: <Icon as={FcBriefcase} w={10} h={10} />,
    description: "Aprende a jugar o mejora tus habilidades con clases impartidas por profesionales.",

  },
  {
    heading: "Membresías Exclusivas",
    icon: <Icon as={FcConferenceCall} w={10} h={10} />,
    description: "Accede a beneficios exclusivos y reserva canchas con prioridad.",

  },
  {
    heading: "Red de Canchas",
    icon: <Icon as={FcGlobe} w={10} h={10} />,
    description: "Forma parte de nuestra comunidad y juega en diferentes ubicaciones.",

  },
  {
    heading: "Servicio de Entrenamiento",
    icon: <Icon as={FcSportsMode} w={10} h={10} />,
    description: "Entrena con profesionales para mejorar tu rendimiento en el pádel.",

  },
];
