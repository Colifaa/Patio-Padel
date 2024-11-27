export default function WhyChooseUs() {
  return (
<div className="bg-[#D2E9E9] mt-7 p-8 text-center max-w-6xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-black mb-6">¿Por qué elegirnos?</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <div className="max-w-md space-y-4">
          <div className="w-full h-48 overflow-hidden">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/1b/35/67/1b356794-8067-0afd-0dc8-8b1eb4b8ce68/12b81a4a-44c5-477e-9a47-4ff04eb665d4_6_U002c7_2_HOR.jpg/643x0w.jpg"
              alt="Reservas Simplificadas"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="text-lg text-black font-semibold">Reservas simplificadas</h3>
          <ul className="text-black space-y-2 text-left">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Gestiona canchas de pádel de manera fácil, rápida y gratuita.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Ten acceso a toda la información de tus reservas y partidos en cualquier momento.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Disfruta de un sistema intuitivo para organizar tus partidos en segundos.
            </li>
          </ul>
        </div>
        <div className="max-w-md space-y-4">
          <div className="w-full h-48 overflow-hidden">
            <img
              src="https://thumbs.dreamstime.com/b/padel-court-tennis-evening-light-ai-generated-content-design-background-instagram-facebook-wall-painting-backgrounds-325690642.jpg"
              alt="Seguridad Garantizada"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="text-lg  text-black font-semibold">Seguro y accesible</h3>
          <ul className="text-black space-y-2 text-left">
            <li className="flex items-start">
              <span className="text-green-500  mr-2">✓</span>
              Sin costos adicionales para la comunidad propietaria de la instalación.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Acceso exclusivo para usuarios autorizados, garantizando tu seguridad.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
