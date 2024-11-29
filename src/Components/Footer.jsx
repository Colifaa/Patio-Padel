import React from "react";
import { FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#203C4C] text-center p-8 md:p-16 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Prueba.png")' }}>
      {/* Contenedor de los íconos de redes sociales */}
      <div className="flex justify-center items-center space-x-4 mb-6 md:mr-16">
        <a
          className="inline-block"
          href="https://www.instagram.com/patiopadelph"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl text-pink-500" />
        </a>
        <a
          className="inline-block "
          href="https://wa.me/+51919499957" // Reemplaza con tu número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-2xl text-green-500" />
        </a>
        <a
          className="inline-block "
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-2xl text-blue-600" />
        </a>
        {/* Puedes agregar más íconos aquí */}
      </div>

      <div className="w-full h-[2px] bg-gray-600 mt-2"></div>
      <div className="w-full h-[2px] bg-gray-600 mt-80"></div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-4">
        <p>&copy; Copyright Todos los derechos reservados {year}</p>
        <p>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/jorge-mathez/"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jorge Mathez
          </a>
        </p>
      </div>

      {/* Tailwind CSS para la imagen de fondo responsiva */}
      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            background-size: contain;  /* Cambiar a contain en móviles */
            background-position: center center;
            min-height: 300px;  /* Ajustar altura para pantallas pequeñas */
          }
        }
      `}</style>

    </footer>
  );
};

export default Footer;
