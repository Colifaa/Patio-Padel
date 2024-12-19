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
    icon: "🎾", // Pelota de tenis
    description:
      "Contamos con 3 canchas panorámicas outdoor de alta calidad.",
  },
  {
    title: "Actividades y Torneos",
    icon: "📅",
    description:
      "Participa en nuestros torneos u organiza tu propio evento en nuestras instalaciones.",
  },
  {
    title: "Clases de Pádel",
    icon: "🎓",
    description:
      "Aprende a jugar o mejora tus habilidades con clases impartidas por nuestro entrenador.",
  },
  {
    title: "Zona Lounge",
    icon: "🍽️",
    description:
      "Disfruta de nuestra zona lounge con área de comidas para una mejor experiencia.",
  },
  {
    title: "Equipamiento",
    icon: "🏓",
    description:
      "Ofrecemos alquiler y venta de equipamiento de pádel, incluyendo palas, pelotas y más.",
  },
  {
    title: "Descuentos",
    icon: "💸",
    description:
      "Entérate de promociones especiales en nuestras redes.",
  },
];
