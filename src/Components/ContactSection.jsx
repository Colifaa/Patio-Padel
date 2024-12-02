import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faComments, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const ContactSection = () => {
  return (
    <section className="relative bg-[#D2E9E9] dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-orange-500 dark:text-orange-400">Contacto</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Estamos aquí para ayudarte
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            No dudes en comunicarte con nosotros. Estamos a tu disposición para cualquier consulta o sugerencia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          {/* Información de contacto */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <span className="inline-block p-3 text-orange-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Correo electrónico</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Escríbenos, estaremos encantados de atenderte.
              </p>
              <p className="mt-2 text-sm text-orange-500 dark:text-orange-400">
                info@patiopadel.pe
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-orange-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <FontAwesomeIcon icon={faComments} className="w-5 h-5" />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                WhatsApp
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Puedes escribirnos a través de WhatsApp en cualquier momento.
              </p>
              <p className="mt-2 text-sm text-orange-500 dark:text-orange-400">
                +51 9 19499957
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-orange-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Dirección</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Ven a visitarnos en nuestra sede, será un placer recibirte.
              </p>
              <p className="mt-2 text-sm text-orange-500 dark:text-orange-400">
                Mar Mediterráneo 324, Punta Hermosa
              </p>
            </div>
          </div>

          {/* Mapa responsivo */}
          <div className="overflow-hidden rounded-lg lg:col-span-2">
            <div
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] lg:w-[500px] mx-auto aspect-square border border-gray-200 shadow-md rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.675197264019!2d-76.8231152239933!3d-12.337634947386597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910599ba85a9bf53%3A0x259f7c5937eedfc0!2sPatio%20Padel%20Punta%20Hermosa!5e0!3m2!1ses-419!2sar!4v1732737565873!5m2!1ses-419!2sar"
                width="600"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

