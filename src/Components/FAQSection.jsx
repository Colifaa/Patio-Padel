'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Box,
  Heading,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function FAQSection() {
  const textColor = useColorModeValue('black', 'black');
  const baseColor = '#D2E9E9'
  const accentColor = 'black'
  const hoverColor = useColorModeValue('#365867', '#1b2d38')

  return (
  
 

      <Flex
        minH={'50vh'}
        align={'center'}
        justify={'center'}
        bg="transparent"
        py={10}
        px={4}
      >
        <Container maxW="3xl">
       

          {/* Acordeón con las preguntas y respuestas */}
          <Accordion
            allowMultiple
            width="100%"
            bg={baseColor}
            rounded="lg"
            shadow="md"
            p={4}
          >
               {/* Título y subtítulo */}
          <Box textAlign="center" mb={8} bgColor="#D2E9E9">
          <h1 className="text-[1.5em] sm:text-[1.25em] md:text-[1.75em] lg:text-[2em] font-bold ">
          Preguntas Frecuentes
          </h1>
            <Text
              color={accentColor}
              fontWeight="semibold"
  
            >
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
              en Patio Padel.
            </Text>
          </Box>
            {/* Pregunta 1 */}
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}
                    rounded="md"
                    bg={isExpanded ? hoverColor : 'transparent'}
                    _hover={{ bg: hoverColor }}
                    transition="background-color 0.3s"
                  >
                    <Text fontSize="md" color="black" fontWeight="semibold">
                      ¿Qué horarios tiene PATIO PADEL?
                    </Text>
                    <ChevronDownIcon fontSize="24px" color={textColor} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="black" fontWeight="normal">
                      Durante la temporada de verano, nuestros horarios son: Lunes a
                      Jueves: 6:00 a 22:00, Viernes y Sábados: 6:00am a 00:00, Domingos:
                      6:00am a 22:00. ¡Te esperamos!
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            {/* Pregunta 2 */}
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}
                    rounded="md"
                    bg={isExpanded ? hoverColor : 'transparent'}
                    _hover={{ bg: hoverColor }}
                    transition="background-color 0.3s"
                  >
                    <Text fontSize="md" color={textColor} fontWeight="semibold">
                      ¿Ofrecen clases de pádel para principiantes?
                    </Text>
                    <ChevronDownIcon fontSize="24px" color={textColor} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="black" fontWeight="normal">
                      Sí, ofrecemos clases para todos los niveles, incluidos los
                      principiantes. Nuestros entrenadores son certificados y tienen
                      experiencia en la enseñanza, para que puedas aprender de manera
                      efectiva.
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            {/* Pregunta 3 */}
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}
                    rounded="md"
                    bg={isExpanded ? hoverColor : 'transparent'}
                    _hover={{ bg: hoverColor }}
                    transition="background-color 0.3s"
                  >
                    <Text fontSize="md" color={textColor} fontWeight="semibold">
                      ¿Se necesita reserva previa para jugar?
                    </Text>
                    <ChevronDownIcon fontSize="24px" color={textColor} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="black" fontWeight="normal">
                      Sí, recomendamos realizar una reserva previa, especialmente durante
                      las horas pico. Esto nos permite asegurarte la disponibilidad de la
                      cancha para que puedas jugar sin preocupaciones.
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            {/* Pregunta 4 */}
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}
                    rounded="md"
                    bg={isExpanded ? hoverColor : 'transparent'}
                    _hover={{ bg: hoverColor }}
                    transition="background-color 0.3s"
                  >
                    <Text fontSize="md" color={textColor} fontWeight="semibold">
                      ¿Tienen equipos de pádel en alquiler?
                    </Text>
                    <ChevronDownIcon fontSize="24px" color={textColor} />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text color="black" fontWeight="normal">
                      ¡Sí! Disponemos de palas de pádel en alquiler para quienes no tengan
                      su propio equipo. Además, vendemos pelotas y otros accesorios deportivos,
                      para que todo lo que necesites esté a tu alcance.
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Container>
      </Flex>
 
  )
}
