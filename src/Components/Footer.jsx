import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
  <footer
  className="w-full bg-[#4e4b4c] text-center p-8 md:p-6 relative bg-cover lg:bg-contain bg-center bg-no-repeat"
  style={{ backgroundImage: 'url("/Prueba.png")' }}
>
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
          href="https://wa.me/+51919499957" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-2xl text-green-500" />
        </a>
    
        {/* Puedes agregar más íconos aquí */}
      </div>

      <div className="w-full h-[2px] bg-gray-600 mt-2"></div>
      <div className="w-full h-[2px] bg-gray-600 mt-80"></div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-4 font-bold">
        <p className=" text-black ">&copy; Copyright Todos los derechos reservados {year}</p>
        <p className="text-black  font-bold">
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
        footer {
          background-size: contain; /* Mantén el diseño original para móviles y tablets */
          background-position: center;
        }

        @media (min-width: 1024px) {
          footer {
            background-size: 40%; /* Reduce el tamaño de la imagen en pantallas grandes */
          }
        }
      `}</style>

    </footer>
  );
};

export default Footer;
