"use client";

import React from "react";
import { InfiniteMovingCards } from "../Components/ui/InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="  h-[15rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials} // Ahora incluye imágenes
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "bullpadel.jpg",
  },
  {
    image: "cola.jpg",
  },
  {
    image: "Head.png",
  },
  {
    image: "Power.jpg",
  },
  {
    image: "samsung.jpg",
  },
];
