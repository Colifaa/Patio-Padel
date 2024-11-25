import React from 'react';
import { Box } from '@chakra-ui/react';

function Wsp() {
  return (
    <Box

      as="a"
      href="https://wa.me/542604224940"
      target="_blank"
      rel="noopener noreferrer"
      position="fixed"
      bottom="40px"
      right="40px"
      width="60px"
      height="60px"
      borderRadius="full"
      bg="green.400"
      boxShadow="lg"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="10"
      _hover={{ bg: 'green.500' }}
    >
      <Box
   zIndex="10"
        as="span"
        width="50px"
        height="50px"
        backgroundImage="url('/whatsapp.png')" // Reemplaza con la URL de tu icono
        backgroundSize="cover"
        backgroundPosition="center"
        borderRadius="full"
      />
    </Box>
  );
}

export default Wsp; 