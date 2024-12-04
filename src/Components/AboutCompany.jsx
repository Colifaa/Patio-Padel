import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faClock, faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const AboutCompany = () => {
  const router = useRouter();

  const features = [
    { icon: faCalendarCheck, text: 'Reserva fácil y rápida de canchas.' },
    { icon: faClock, text: 'Horarios flexibles para adaptarse a tu agenda.' },
    { icon: faMapMarkerAlt, text: 'Ubicación accesible y con estacionamiento.' },
    { icon: faUsers, text: 'Ambiente ideal para jugadores de todos los niveles.' },
  ];

  const handleAboutClick = () => {
    router.push('/about');
  };

  return (
    <section className="bg-[#A7C5D6] p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-center text-black mb-4 ">
        Sobre Nosotros
      </h2>
      <p className="text-[#020407] text-center mb-6 font-bold">
        En Patio Padel, ofrecemos una experiencia de juego única, con canchas de primera calidad
        y un sistema de reservas pensado para que disfrutes del deporte sin complicaciones.
      </p>

      <div className="text-center mt-6">
        <button
          className="bg-[#F6F6F6] text-black px-4 py-2 rounded hover:bg-[#4e4b4c] transition duration-200"
          onClick={handleAboutClick}
          aria-label="Más sobre Patio Padel"
        >
          + Sobre Patio Padel
        </button>
      </div>

      <h3 className="text-2xl font-semibold text-center mt-4 text-black mb-4">
        ¿Qué Ofrecemos?
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-[#F6F6F6]  hover:bg-[#4e4b4c] rounded-lg shadow transition-transform duration-300 transform hover:scale-105"
          >
            <FontAwesomeIcon
              icon={feature.icon}
              className="text-[#02060a] text-2xl mr-3"
            />
            <span className="text-lg text-black">
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCompany;
