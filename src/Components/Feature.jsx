import { Box, Flex, SimpleGrid, chakra } from '@chakra-ui/react'
import React from 'react'

function Feature() {
  return (
    <Flex
      p={10} // Reducimos el padding general para pantallas pequeñas
      color="black"
      w="full"
      h="full"
      justifyContent="center"
      alignItems="center"
      pos="relative"
    >
      <Box
        shadow="xl"
        bg="#A7C5D6"
        color="black"
        px={8}
        py={10} // Reducimos el padding en el eje vertical
        mx="auto"
        borderRadius="md"
      >
        <SimpleGrid
          alignItems="start"
          columns={{
            base: 1,
            md: 2,
          }}
          mb={24}
          spacingY={{
            base: 5, // Reducimos el espaciado en pantallas pequeñas
            md: 32,
          }}
          spacingX={{
            base: 5,
            md: 24,
          }}
        >
          <Box>
            <chakra.h2
              mt="20"
              mb={5}
              fontSize={{
                base: "xl", // Tamaño de fuente más pequeño en pantallas pequeñas
                md: "4xl",
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="black"
              lineHeight={{
                base: "shorter",
                md: "shorter",
              }}
              textShadow="2px 0 currentcolor"
            >
              Un espacio único para tu mejor rendimiento
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="black"
                 fontWeight="extrabold"
              fontSize={{
                base: "sm", // Tamaño de fuente ajustado para pantallas pequeñas
                md: "lg",
              }}
            >
              Nos apasiona ofrecer un lugar único donde jugadores de todos los niveles puedan disfrutar del pádel en su máxima expresión. 
              Contamos con instalaciones de calidad, un ambiente amigable y un equipo comprometido con brindarte la mejor experiencia.
            </chakra.p>
          </Box>
          <Box
            w="full"
            h={{
              base: "200px", // Altura específica para pantallas pequeñas
              md: "full",
            }}
            py={{
              base: 20,
              md: 48,
            }}
            bgImage="url('https://www.sportbs.es/wp-content/uploads/2018/07/Como-jugar-al-Padel.jpg')" // Reemplaza con la URL de la imagen
            bgSize="cover"
            bgPosition="center"
            borderRadius="md"
          ></Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            md: 2,
          }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{
            base: 5,
            md: 32,
          }}
          spacingX={{
            base: 5,
            md: 24,
          }}
        >
          <Box
            order={{
              base: "initial",
              md: 2,
            }}
          >
            <chakra.h2
              mb={4}
              fontSize={{
                base: "xl",
                md: "4xl",
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{
                base: "center",
                md: "left",
              }}
              color="black"
                textShadow="2px 0 currentcolor"
              lineHeight={{
                base: "shorter",
                md: "shorter",
                
              }}
            >
              Tu experiencia en el juego, a tu manera
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="black"
              fontWeight="extrabold"
              fontSize={{
                base: "sm",
                md: "lg",
              }}
            >
              Creemos que cada jugador tiene su propio estilo. Por eso, ofrecemos un espacio flexible y adaptado a tus necesidades, 
              donde podrás disfrutar del pádel a tu propio ritmo, con acceso a todas nuestras canchas y servicios de la manera que prefieras.
            </chakra.p>
          </Box>
          <Box
            w="full"
            h={{
              base: "200px",
              md: "full",
            }}
            py={{
              base: 20,
              md: 48,
            }}
            bgImage="url('https://img.freepik.com/fotos-premium/pelota-padel-cerca-red_23-2149459040.jpg')" // Reemplaza con la URL de la imagen
            bgSize="cover"
            bgPosition="center"
            borderRadius="md"
          ></Box>
        </SimpleGrid>
      </Box>
    </Flex>
  )
}

export default Feature
