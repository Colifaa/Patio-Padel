import { AnimatedTestimonials } from "../Components/ui/AnimatedTestimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Las canchas son increíbles, con una superficie ideal para jugar y unas instalaciones súper cómodas. ¡Me encanta venir aquí!",
      name: "Laura Fernández",
      designation: "Jugadora amateur",
      src: "/Laura.png",
    },
    {
      quote:
        "Siempre está limpio y bien organizado. Es el lugar perfecto para disfrutar del pádel con amigos.",
      name: "Juan Pérez",
      designation: "Jugador recreativo",
      src: "/Deportista2.png",
    },
    {
      quote:
        "Sin duda, las mejores canchas de la ciudad. Además, el ambiente es genial para pasar un buen rato.",
      name: "Ana López",
      designation: "Fanática del deporte",
      src: "/Ana.png",
    },
    {
      quote:
        "El ambiente es espectacular, y el personal siempre está dispuesto a ayudar. Es un lugar que recomiendo a todos.",
      name: "Carlos Medina",
      designation: "Jugador profesional",
      src: "/Deportista.png",
    },
    {
      quote:
        "Un sitio excelente para jugar al pádel. Las instalaciones son de primera y el servicio es impecable.",
      name: "Sofía Martínez",
      designation: "Amante del deporte",
      src: "/Mari.png",
    },
  ];

  return (
    <div className=" bg-[#D2E9E9] relative">

      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
