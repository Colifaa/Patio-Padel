import { Box } from '@chakra-ui/react';
import React from 'react';

function ButtonReserva() {
  return (
    <> 
      <Box>
        <link
          href="https://fonts.googleapis.com/css2?family=Alilata:wght@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Garamond&display=swap"
          rel="stylesheet"
        />
      </Box>

      <div
        className="h-[15em] w-[30em] sm:w-[2em] md:w-[26em] lg:w-[28em] border-2 border-[rgba(32,60,76,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#203C4C] to-[rgba(32,60,76,0.1)] text-black font-nunito p-[1em] flex justify-center items-center flex-col gap-[0.75em] backdrop-blur-[12px] text-center"
      >
        <div>
          <h1 className="text-[2em] sm:text-[1.5em] md:text-[1.75em] font-bold font-[Garamond]">Bienvenidos</h1>
          <p className="text-[0.85em] sm:text-[0.75em] md:text-[0.8em] font-semibold font-[Alilata]">
            Asegura tu espacio en nuestras canchas de pádel y disfruta de una experiencia única.
          </p>
        </div>

        <button
          className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] border-[rgba(255,255,255,0.5)] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
        >
          <p className="font-[Alilata]">Reservar ahora</p>
          <svg
            className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
            stroke="currentColor"
            strokeWidth="1"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}

export default ButtonReserva;
