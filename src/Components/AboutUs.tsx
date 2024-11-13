export default function AboutUs() {
  return (
    <div className="bg-transparent p-8 text-center relative">
      <h2 className="text-3xl font-bold text-green-600 mb-6">Sobre nosotros</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <div className="max-w-md space-y-4">
          <img src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Padel Court" className="rounded-md" />
          <h3 className="text-lg font-semibold">LA RESERVA DE PISTA SIMPLIFICADA</h3>
          <ul className="text-gray-600 space-y-2 text-left">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Podrás gestionar de forma fácil, rápida y GRATUITA las pistas de pádel o tenis...
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Toda la información de tus reservas y partidos en tu bolsillo...
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Nunca fue tan fácil poder reservar, ni montar tus partidos...
            </li>
          </ul>
        </div>
        <div className="max-w-md space-y-4">
          <img src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mobile App" className="rounded-md" />
          <h3 className="text-lg font-semibold">GRATIS, SENCILLO Y SOBRE TODO SEGURO</h3>
          <ul className="text-gray-600 space-y-2 text-left">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              La comunidad propietaria de la instalación no tendrá ningún tipo de gasto...
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              Solo los usuarios de la comunidad tendrán acceso a la instalación...
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
