import { HoverEffect } from "./ui/HoverEffect";

export function Tarjetitas() {
  return (
    <div className="max-w-5xl mx-auto px-8 text-center">
      <h2 className="text-3xl font-bold #FFFFFF">
        Servicios y beneficios
      </h2>
      <p className="text-lg #FFFFFF">
        Descubre todo lo que ofrecemos para que vivas una experiencia completa en nuestras canchas de pádel.
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  
  {
    title: "Alquiler de Canchas",
    description:
      "Alquila nuestras canchas de alta calidad para partidos individuales o dobles.",
    link: "",
    img:"bx-run.svg"
  },
  {
    title: "Eventos y Torneos",
    description:
      "Participa en nuestros torneos o organiza tu propio evento en nuestras instalaciones.",
    link: "",
  },
  {
    title: "Clases de Pádel",
    description:
      "Aprende a jugar o mejora tus habilidades con clases impartidas por profesionales.",
    link: "",
  },
  {
    title: "Membresías Exclusivas",
    description:
      "Accede a beneficios exclusivos y reserva canchas con prioridad.",
    link: "",
  },
  {
    title: "Red de Canchas",
    description:
      "Forma parte de nuestra comunidad y juega en diferentes ubicaciones.",
    link: "",
  },
];
