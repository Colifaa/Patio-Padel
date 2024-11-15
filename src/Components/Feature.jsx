import { Box, Button, Flex, SimpleGrid, chakra } from '@chakra-ui/react'
import React from 'react'

function Feature() {
  return (
    <Flex
    
      p={10} // Reducimos el padding general para pantallas pequeñas
      color="red.100"
      w="full"
      justifyContent="center"
      alignItems="center"
      pos="relative"
    >
      <Box
        shadow="xl"
        bg="transparent"
        color="red"
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
              mb={4}
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
              color="white"
              lineHeight={{
                base: "shorter",
                md: "shorter",
              }}
              textShadow="2px 0 currentcolor"
            >
              Clear overview for efficient tracking
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.200"
              fontSize={{
                base: "sm", // Tamaño de fuente ajustado para pantallas pequeñas
                md: "lg",
              }}
            >
              Handle your subscriptions and transactions efficiently with the clear
              overview in Dashboard. Features like the smart search option allow you
              to quickly find any data you’re looking for.
            </chakra.p>
            <Button
              w={{
                base: "full",
                sm: "auto",
              }}
              size="lg"
              bg="white"
              color="#203C4C"
              _hover={{
                bg: "gray.100",
              }}
              as="a"
            >
              Learn More
            </Button>
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
              color="white"
              lineHeight={{
                base: "shorter",
                md: "shorter",
              }}
            >
              Decide how you integrate Payments
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.200"
              fontSize={{
                base: "sm",
                md: "lg",
              }}
            >
              Love to code? Next to our ready-made and free plugins you can use our
              expansive yet simple API; decide how you integrate Payments and build
              advanced and reliable products yourself from scratch.
            </chakra.p>
            <Button
              w={{
                base: "full",
                sm: "auto",
              }}
              size="lg"
              bg="white"
              color="#203C4C"
              _hover={{
                bg: "gray.100",
              }}
              as="a"
            >
              Learn More
            </Button>
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
