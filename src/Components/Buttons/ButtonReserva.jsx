import { Box } from '@chakra-ui/react';
import React from 'react';
import { TextGenerateEffectDemo } from '../TextGenerateEffectDemo';

function ButtonReserva() {
  const handleRedirect = () => {
    window.open("https://atcsports.io/venues/patio-padel-lima", "_blank"); // Abre el enlace en una nueva pestaña
  };

  return (
    <>
   

      <div
        className="h-auto w-full max-w-[28em] border-2 border-[rgba(32,60,76,0.5)] rounded-[1.5em] bg-gradient-to-br from-[#D2E9E9] to-[rgba(54,164,228,0.1)] text-black font-semibold p-6 flex justify-center items-center flex-col gap-4 backdrop-blur-[12px] text-center sm:p-4 sm:gap-3"
      >
        <div>
          <h1 className="text-[1.5em] sm:text-[1.25em] md:text-[1.75em] lg:text-[2em] font-bold ">
            Bienvenidos
          </h1>
          <TextGenerateEffectDemo />
        </div>

        <button
          onClick={handleRedirect} // Añadir la funcionalidad al clic
          className="relative inline-flex h-12 active:scale-95 transition-transform overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span
            className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
          ></span>
          <span
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 text-sm font-medium text-white backdrop-blur-3xl gap-2"
          >
            Reservar ahora
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}

export default ButtonReserva;
