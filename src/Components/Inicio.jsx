'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'


export default function Inicio() {
  const router = useRouter()

  const handleReservaClick = () => {
    router.push('/reservas')
  }

  return (
    <>
        
      <Container maxW={'3xl'} position="relative">
     
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
        
          {/* Título */}
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '5xl', md: '6xl' }} // Tamaños más grandes
            lineHeight={'110%'}
>
           titulo improvisado <br />
           <Text as={'span'} color={'#5793b6'} >
            subtitulo
           </Text>
          </Heading>


          {/* Descripción */}
          <Text color={'#9dc8e0'} fontSize={'lg'}>
            Disfruta de nuestras instalaciones de primer nivel y garantiza tu lugar en nuestras canchas con nuestro sistema de reservas. ¡Haz tu reserva y prepárate para jugar!
          </Text>

          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              onClick={handleReservaClick}
              colorScheme={'green'}
              bg={'#5793B6'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: '#2A6483',
              }}
            >
              Reservar Ahora
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Conoce más
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* Estilos adicionales para la animación */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 8px rgba(72, 187, 120, 0.8);
          }
          100% {
            box-shadow: 0 0 20px rgba(72, 187, 120, 1);
          }
        }
      `}</style>
    </>
  )
}

