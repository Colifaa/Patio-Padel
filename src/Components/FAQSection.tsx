import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Flex, Icon, chakra, useColorModeValue, Text, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

// Definir el tipo de las props para FAQItem
interface FAQItemProps {
  question: string;
  answer: string;
  icon: ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, icon }) => {
  return (
    <AccordionItem borderColor="gray.200" borderWidth="medium" _dark={{ borderColor: "#3E8EAC " }}>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <Flex alignItems="center" minH={12}>
            <Flex
              shrink={0}
              alignItems="center"
              justifyContent="center"
              h={{ base: 8, md: 12 }}
              w={{ base: 8, md: 12 }}
              rounded="md"
              bg="brand.500"
              color="white"
            >
              <Icon
                boxSize={{ base: 4, md: 6 }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {icon}
              </Icon>
            </Flex>
            <Box ml={{ base: 2, md: 4 }}>
              <chakra.dt fontSize="lg" fontWeight="medium" lineHeight="6" color="gray.900" _dark={{ color: "white" }}>
                {question}
              </chakra.dt>
            </Box>
          </Flex>
        </Box>
        <AccordionIcon _dark={{ color: "white" }} />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.300" }}>
          {answer}
        </chakra.dd>
      </AccordionPanel>
    </AccordionItem>
  );
};

const FAQSection: React.FC = () => {
  const textColor = useColorModeValue("gray.900", "gray.100");

  return (
    <Flex bg="gray.200" _dark={{ bg: "transparent" }} p={20} w="auto" justifyContent="center" alignItems="center">
      <Box py={12} borderWidth="medium" borderColor="#3E8EAC" rounded="xl" shadow="base" w="100%">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign="center">
            <chakra.h2
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={textColor}
              _dark={{ color: "gray.100" }}
            >
              Preguntas Frecuentes
            </chakra.h2>
            <chakra.p mt={4} maxW="2xl" fontSize="xl" mx={{ lg: "auto" }} color="gray.500" _dark={{ color: "gray.300" }}>
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios en Patio Padel.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Accordion allowToggle defaultIndex={[0]}>
              <FAQItem
                question="¿Qué horarios tiene PATIO PADEL?"
                answer={
                  <>
                    Durante la temporada de verano, nuestros horarios son:
                    {[
                      "Lunes a Jueves: 6:00 a 22:00",
                      "Viernes y Sábados: 6:00am a 00:00",
                      "Domingos: 6:00am a 22:00",
                      "¡Te esperamos!"
                    ].map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </>
                }
                
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              />
              <FAQItem
                question="¿Ofrecen clases de padel para principiantes?"
                answer="Sí, ofrecemos clases para todos los niveles, incluidos los principiantes. Nuestros entrenadores son certificados y tienen experiencia en la enseñanza, para que puedas aprender de manera efectiva."
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              />
              <FAQItem
                question="¿Se necesita reserva previa para jugar?"
                answer="Sí, recomendamos realizar una reserva previa, especialmente durante las horas pico. Esto nos permite asegurarte la disponibilidad de la cancha para que puedas jugar sin preocupaciones."
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              />
              <FAQItem
                question="¿Tienen equipos de padel en alquiler?"
                answer="¡Sí! Disponemos de palas de padel en alquiler para quienes no tengan su propio equipo. Además, vendemos pelotas y otros accesorios deportivos, para que todo lo que necesites esté a tu alcance."
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              />
            </Accordion>

            <Box mt={6} textAlign="center">
              <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.400" }} mb={2}>
                ¿Tienes más preguntas?
              </Text>
              <Link
                href="mailto:support@example.com"
                isExternal
                fontSize="lg"
                color="brand.600"
                _dark={{ color: "brand.400" }}
                fontWeight="medium"
                _hover={{ textDecoration: "none" }}
              >
                ¡Escríbenos!
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default FAQSection;
