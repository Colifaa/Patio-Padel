import { AnimatedTestimonials } from "../Components/ui/AnimatedTestimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Las canchas de Patio Pádel son increíbles. La superficie es perfecta para jugar y las instalaciones son muy cómodas.",
      name: "Laura Fernández",
      designation: "Jugadora amateur",
      src: "/Laura.png",
    },
    {
      quote:
        "Me encanta jugar en Patio Pádel. Siempre está limpio y bien organizado. ¡Es mi lugar favorito para el pádel!",
      name: "Juan Pérez",
      designation: "Jugador recreativo",
      src: "/Deportista2.png",
    },
    {
      quote:
        "Las mejores canchas de pádel en la ciudad. Además, tienen un ambiente genial para disfrutar con amigos.",
      name: "Ana López",
      designation: "Fanática del deporte",
      src: "/Ana.png",
    },
    {
      quote:
        "El ambiente es espectacular, y el personal siempre está dispuesto a ayudar. ¡Recomiendo Patio Pádel a todos!",
      name: "Carlos Medina",
      designation: "Jugador profesional",
      src: "/Deportista.png",
    },
    {
      quote:
        "Excelente lugar para jugar al pádel. Las instalaciones son de primera categoría y el servicio es impecable.",
      name: "Sofía Martínez",
      designation: "Amante del deporte",
      src: "/Mari.png",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-6">
        ¿Qué opinan nuestros clientes?
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
