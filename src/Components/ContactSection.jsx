import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faComments, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <section className="relative bg-white-300 dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-orange-500 dark:text-orange-400">Contacto</p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Ponerse en contacto
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            A nuestro amable equipo le encantaría saber de usted.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <span className="inline-block p-3 text-orange-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Nuestro amigable equipo está aquí para ayudarlo.
              </p>
              <p className="mt-2 text-sm text-orange-500 dark:text-orange-400">
                reservas@padelclub.com
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
                Envíenos un mensaje por WhatsApp.
              </p>
              <p className="mt-2 text-sm text-orange-500 dark:text-orange-400">
                +54 9 11 2345 6789
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-orange-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Ubicación</h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Visítenos en nuestra sede central.
              </p>
              <p className="mt-2 text-sm text-orange-500 dark:text-orange-400">
                Av. Siempre Viva 1234, Buenos Aires
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto ml-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.997123159085!2d-77.01279750413892!3d-12.112349042766997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c99131635589%3A0xb89c92428e7d7152!2sClub%20Padel%20Lima!5e0!3m2!1ses-419!2sar!4v1732059522428!5m2!1ses-419!2sar"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
