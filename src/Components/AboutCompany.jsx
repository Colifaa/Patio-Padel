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
    <>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </div>
      <section className="bg-[#1e466d] p-8 rounded-lg shadow-lg mt-10">
        <h2
          className="text-3xl font-semibold text-center text-white mb-4"
          style={{ fontFamily: '"Permanent Marker", cursive' }}
        >
          Sobre Nosotros
        </h2>
        <p
          className="text-[#a8c5e6] text-center mb-6 font-bold"
          style={{ fontFamily: '"Permanent Marker", cursive' }}
        >
          En Patio Padel, ofrecemos una experiencia de juego única, con canchas de primera calidad
          y un sistema de reservas pensado para que disfrutes del deporte sin complicaciones.
        </p>

        <div className="text-center mt-6">
          <button
            className="bg-[#2e5d82] text-white px-4 py-2 rounded hover:bg-[#254c6b] transition duration-200"
            onClick={handleAboutClick}
            aria-label="Más sobre Patio Padel"
            style={{ fontFamily: '"Permanent Marker", cursive' }}
          >
            + Sobre Patio Padel
          </button>
        </div>

        <h3
          className="text-2xl font-semibold text-center mt-4 text-white mb-4"
          style={{ fontFamily: '"Permanent Marker", cursive' }}
        >
          ¿Qué Ofrecemos?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-[#355d7d] rounded-lg shadow transition-transform duration-300 transform hover:scale-105"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-[#a8c5e6] text-2xl mr-3"
              />
              <span
                className="text-lg text-white"
                style={{ fontFamily: '"Permanent Marker", cursive' }}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
