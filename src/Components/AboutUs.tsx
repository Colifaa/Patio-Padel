

export default function WhyChooseUs() {
  const handleRedirect = () => {
    window.open("https://atcsports.io/venues/patio-padel-lima", "_blank"); // Abre el enlace en una nueva pestaña
  };

  return (
    <div className="bg-[#A7C5D6] mt-7 px-4 py-8 sm:px-6 sm:py-10 lg:px-20 lg:py-24  max-w-full lg:max-w-full mx-auto rounded-lg shadow-lg">
      <div className="flex flex-col items-start">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-black mb-4 text-left">
          El Primer club de pádel de Punta Hermosa
        </h2>
        <div className="text-[#020407] text-center mb-6 font-bold">  
       Asegura tu espacio en nuestras canchas de pádel y disfruta de una experiencia única cerca el mar.
        </div>
        
      </div>
      <div className="flex justify-start">
      <button
  onClick={handleRedirect} // Añadir la funcionalidad al clic
  className="relative inline-flex h-12 active:scale-95 transition-transform overflow-hidden rounded-lg p-[2px] focus:outline-none"
>
  <span
   className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#555555_0%,#666666_50%,#333333_100%)]"
  ></span>
  <span
    className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-[#333333] px-6 text-lg font-medium text-white backdrop-blur-[10px] gap-2"
  >
    Reserva ahora
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
    </div>
  );
}
