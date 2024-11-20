import { Box, Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faComments, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

const ContactInfo = () => {
  // Creando las referencias de Intersection Observer
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1 });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.1 });
  const { ref: contactInfoRef, inView: contactInfoInView } = useInView({ threshold: 0.1 });
  const { ref: mapRef, inView: mapInView } = useInView({ threshold: 0.1 });

  return (
    <Box p={5} borderWidth={1} borderRadius="md" boxShadow="md" position="relative">
      <Heading size="lg" mb={4} textAlign="center">
        Información de Contacto
      </Heading>

      <Box
        ref={contactInfoRef}
        className={`transition-opacity duration-700 delay-200 ${
          contactInfoInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#c2ac93] text-2xl mr-4" />
            <a href="mailto:reservas@padelclub.com" className="text-lg">
              reservas@padelclub.com
            </a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faComments} className="text-[#c2ac93] text-2xl mr-4" />
            <a href="https://wa.me/5491123456789" className="text-lg">
              WhatsApp: +54 9 11 2345 6789
            </a>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#c2ac93] text-2xl mr-4" />
            <span className="text-lg">Ubicación: Av. Siempre Viva 1234, Buenos Aires</span>
          </div>
        </div>
      </Box>

      {/* Sección del mapa de Google usando iframe */}
      <div
        ref={mapRef}
        className={`mt-8 transition-opacity duration-700 delay-300 ${
          mapInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <Heading size="md" textAlign="center" mb={4}>
          Nuestra Ubicación
        </Heading>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.997123159085!2d-77.01279750413892!3d-12.112349042766997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c99131635589%3A0xb89c92428e7d7152!2sClub%20Padel%20Lima!5e0!3m2!1ses-419!2sar!4v1732059522428!5m2!1ses-419!2sar"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        />
      </div>
    </Box>
  );
};

export default ContactInfo;
