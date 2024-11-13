import { AnimatedTestimonials } from "../Components/ui/AnimatedTestimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/one-piece-3006218.jpg?tf=3840x",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/one-piece-3006218.jpg?tf=3840x",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/one-piece-3006218.jpg?tf=3840x",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/one-piece-3006218.jpg?tf=3840x",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/one-piece-3006218.jpg?tf=3840x",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
