'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcSportsMode,
  FcBriefcase,
  FcCalendar,
  FcConferenceCall,
  FcGlobe,
} from 'react-icons/fc'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('green.100', 'green.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'green'} size={'sm'}>
          Más información
        </Button>
      </Stack>
    </Box>
  )
}

export default function List() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Servicios y Beneficios
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Descubre todo lo que ofrecemos para que vivas una experiencia completa en nuestras canchas de pádel.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Alquiler de Canchas'}
            icon={<Icon as={FcSportsMode} w={10} h={10} />}
            description={'Alquila nuestras canchas de alta calidad para partidos individuales o dobles.'}
            href={'#'}
          />
          <Card
            heading={'Eventos y Torneos'}
            icon={<Icon as={FcCalendar} w={10} h={10} />}
            description={'Participa en nuestros torneos o organiza tu propio evento en nuestras instalaciones.'}
            href={'#'}
          />
          <Card
            heading={'Clases de Pádel'}
            icon={<Icon as={FcBriefcase} w={10} h={10} />}
            description={'Aprende a jugar o mejora tus habilidades con clases impartidas por profesionales.'}
            href={'#'}
          />
          <Card
            heading={'Membresías Exclusivas'}
            icon={<Icon as={FcConferenceCall} w={10} h={10} />}
            description={'Accede a beneficios exclusivos y reserva canchas con prioridad.'}
            href={'#'}
          />
          <Card
            heading={'Red de Canchas'}
            icon={<Icon as={FcGlobe} w={10} h={10} />}
            description={'Forma parte de nuestra comunidad y juega en diferentes ubicaciones.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}
