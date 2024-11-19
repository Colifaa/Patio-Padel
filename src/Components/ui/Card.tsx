import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Componente principal con hover effect
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: string; // El ícono ahora es un string con el símbolo o el nombre del ícono
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Cambié 'let' a 'const'

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx} // Usamos idx como clave
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full  bg-[#2C5575] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardIcon>{item.icon}</CardIcon> {/* El ícono es directamente texto o símbolo */}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

// Componente Card
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#203C4C] border border-transparent dark:border-black/[0.2] group-hover:border-slate-700 relative z-20", // Usamos el color base en el fondo
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// Componente para el título de la tarjeta
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-white font-bold tracking-wide mt-4 flex justify-center items-center", // Cambiamos a texto blanco para mayor contraste
        className
      )}
    >
      {children}
    </h4>
  );
};

// Componente para la descripción de la tarjeta
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-300 tracking-wide leading-relaxed text-sm", // Cambiamos a un gris claro para la descripción
        className
      )}
    >
      {children}
    </p>
  );
};

// Componente para el icono de la tarjeta
export const CardIcon = ({
  className,
  children,
}: {
  className?: string;
  children: string; // El ícono es un string con un símbolo
}) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center text-5xl text-white", // Icono centrado con color blanco
        className
      )}
    >
      {children} {/* Aquí mostramos el ícono como texto */}
    </div>
  );
};
