import { cn } from "@/lib/utils";
import {
  IconHeart,
  IconCloud,
  IconRouteAltLeft,
  IconHelp,
  IconTerminal2,
  IconUsersGroup,
  IconPaw,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Canchas de Alta Calidad",
      description: "Contamos con 3 canchas panorámicas para brindarte la mejor experiencia en cada partido.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ubicación estratégica",
      description: "Estamos ubicados en la zona exclusiva de Playa Blanca.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Academia y Clínicas",
      description: "Contamos con entrenador para sesiones individuales y grupales.",
      icon: <IconHelp />,
    },
    {
      title: "Eventos Corporativos",
      description: "Organiza tu evento en nuestras instalaciones.",
      icon: <IconUsersGroup />,
    },
    {
      title: "Comunidad",
      description: "Pertenece a la principal comunidad de pádel en el sur.",
      icon: <IconHeart />,
    },
    {
      title: "Pet-friendly",
      description: "Puedes venir a jugar con tus mascotas.",
      icon: <IconPaw />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
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
        "flex bg-[#333333] flex-col lg:border-r py-10 relative group/feature border-[#A7C5D6]",
        (index === 0 || index === 4) && "lg:border-l border-[#305B6E]",
        index < 4 && "lg:border-b border-[#305B6E]"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#203C4C] to-[#305B6E] pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#305B6E] to-[#203C4C] pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#A7D6E4]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#1B2D3A] group-hover/feature:bg-[#A7C5D6] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#D2E9E9]">
          {title}
        </span>
      </div>
      <p className="text-sm text-[#B5CFD8] max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
