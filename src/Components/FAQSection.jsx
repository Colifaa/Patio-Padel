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
  const textColor = useColorModeValue('red.900', 'red.100')

  return (
    <Flex
      minH={'50vh'}
      align={'center'}
      justify={'center'}

      py={10}>
      <Container maxW="3xl">
        {/* Título y subtítulo */}
        <Box textAlign="center" mb={8}>
          <Heading as="h2" size="xl" color={textColor} mb={4}>
            Preguntas Frecuentes
          </Heading>
          <Text color="gray.600" _dark={{ color: 'gray.400' }}>
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios en Patio Padel.
          </Text>
        </Box>

        {/* Acordeón con las preguntas y respuestas */}
        <Accordion allowMultiple width="100%" rounded="lg">
          {/* Pregunta 1 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">¿Qué horarios tiene PATIO PADEL?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Durante la temporada de verano, nuestros horarios son: Lunes a Jueves: 6:00 a 22:00,
                Viernes y Sábados: 6:00am a 00:00, Domingos: 6:00am a 22:00. ¡Te esperamos!
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Pregunta 2 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">¿Ofrecen clases de pádel para principiantes?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Sí, ofrecemos clases para todos los niveles, incluidos los principiantes. Nuestros entrenadores son certificados y tienen experiencia en la enseñanza, para que puedas aprender de manera efectiva.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Pregunta 3 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">¿Se necesita reserva previa para jugar?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Sí, recomendamos realizar una reserva previa, especialmente durante las horas pico. Esto nos permite asegurarte la disponibilidad de la cancha para que puedas jugar sin preocupaciones.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          {/* Pregunta 4 */}
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">¿Tienen equipos de pádel en alquiler?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                ¡Sí! Disponemos de palas de pádel en alquiler para quienes no tengan su propio equipo. Además, vendemos pelotas y otros accesorios deportivos, para que todo lo que necesites esté a tu alcance.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}
