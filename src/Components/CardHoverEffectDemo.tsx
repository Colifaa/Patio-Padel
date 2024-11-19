import { HoverEffect } from "../Components/ui/Card";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Alquiler de Canchas",
    icon: "🎾",
    description:
      "Alquila nuestras canchas de alta calidad para partidos individuales o dobles.",
  },
  {
    title: "Eventos y Torneos",
    icon: "📅",
    description:
      "Participa en nuestros torneos o organiza tu propio evento en nuestras instalaciones.",
  },
  {
    title: "Clases de Pádel",
    icon: "🎓",
    description:
      "Aprende a jugar o mejora tus habilidades con clases impartidas por profesionales.",
  },
  {
    title: "Descuentos",
    icon: "💸",
    description:
      "Obtén descuentos en las reservas de canchas si eres un usuario frecuente o participas en promociones especiales.",
  },
  {
    title: "Soporte y Asesoría",
    icon: "🗣️",
    description:
      "Ofrecemos asesoría personalizada para organizar tus partidos, torneos o elegir las mejores clases de pádel.",
  },
  {
    title: "Equipamiento de Pádel",
    icon: "🏓",
    description:
      "Ofrecemos alquiler y venta de equipamiento de pádel, incluyendo paletas, pelotas, y más.",
  },
];