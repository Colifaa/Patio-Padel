import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconHeart,
  IconCloud,
  IconRouteAltLeft,
  IconEaseInOut,
  IconHelp,
  IconCurrencyDollar,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Canchas de Alta Calidad",
      description:
        "Nuestras canchas están diseñadas para brindarte la mejor experiencia en cada partido, con superficies de última generación.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Acceso fácil y rápido",
      description:
        "Reserva tu cancha de manera sencilla y rápida desde nuestra plataforma, ¡y listo para jugar!",
      icon: <IconEaseInOut />,
    },
    {
      title: "Precios competitivos",
      description:
        "Ofrecemos tarifas muy competitivas para que disfrutes de tu deporte favorito sin preocuparte por el costo.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Canchas cubiertas y al aire libre",
      description:
        "Contamos con opciones de canchas cubiertas y al aire libre, para que puedas jugar sin importar las condiciones del clima.",
      icon: <IconCloud />,
    },
    {
      title: "Ubicación estratégica",
      description:
        "Estamos ubicados en una zona de fácil acceso, para que puedas disfrutar del pádel sin complicaciones de desplazamiento.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Atención al cliente 24/7",
      description:
        "Nuestro equipo está disponible todo el tiempo para responder cualquier duda o resolver inconvenientes durante tu visita.",
      icon: <IconHelp />,
    },
    {
      title: "Reserva flexible",
      description:
        "Puedes hacer tu reserva con facilidad, adaptándote a tu horario y disponibilidad, incluso en el último minuto.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Todo lo que necesitas para jugar",
      description:
        "Además de las canchas, tenemos todos los accesorios y servicios para que tu experiencia de pádel sea perfecta.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex  bg-[#2A4756] flex-col lg:border-r py-10 relative group/feature border-[#305B6E]",
        (index === 0 || index === 4) && "lg:border-l border-[#305B6E]",
        index < 4 && "lg:border-b border-[#305B6E]"
      )}
    >
      {index < 4 && (
        <div className=" opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#203C4C] to-[#305B6E] pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#305B6E] to-[#203C4C] pointer-events-none" />
      )}
      <div className=" mb-4 relative z-10 px-10 text-[#A7D6E4] ">
        {icon}
      </div>
      <div className=" text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#1B2D3A] group-hover/feature:bg-[#A7D6E4] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#D2E9E9]">
          {title}
        </span>
      </div>
      <p className="text-sm text-[#B5CFD8] max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}  
