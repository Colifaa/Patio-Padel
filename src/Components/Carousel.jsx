import React, { useState } from 'react';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const images = [
  'https://media.gettyimages.com/id/1402899150/es/foto/ni%C3%B1o-peque%C3%B1o-jugando-al-p%C3%A1del-en-la-pista.jpg?s=2048x2048&w=gi&k=20&c=abc7-vy7RqVFaYm-wuZ1wNmLAsbKxYBTUG8d9a9xNsw=',
  'https://media.gettyimages.com/id/1389721444/es/foto/paddle-tennis-racket-and-balls-in-fence.jpg?s=2048x2048&w=gi&k=20&c=-fp9gSQlptladDq0-fErTysJr-K0WrR2Znazc5f-auM=',
  'https://media.gettyimages.com/id/1473484933/es/foto/j%C3%B3venes-jugando-al-padel-tennis.jpg?s=2048x2048&w=gi&k=20&c=7GKI6VDdmJIS6rD0_ibaJGfiMHZXtHWwAGs2CLjaak0=',
  // Añade más URLs de imágenes aquí
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box position="relative" width="full" overflow="hidden" borderRadius="lg">
      <Image
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        width="full"
        height="400px"
        objectFit="cover"
        transition="all 0.5s ease-in-out"
      />

      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Anterior"
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        onClick={prevSlide}
        backgroundColor="rgba(0, 0, 0, 0.5)"
        color="white"
        _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      />

      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Siguiente"
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        onClick={nextSlide}
        backgroundColor="rgba(0, 0, 0, 0.5)"
        color="white"
        _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      />
    </Box>
  );
};

export default Carousel;
