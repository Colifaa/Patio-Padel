import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className="relative z-10"
      style={{ backgroundColor: "#4e4b4c", borderBottom: "1px solid #203C4C" }}
    >
      <div className="flex items-center justify-between mx-auto max-w-screen-xl p-2 text-white">
        {/* Logo centrado en pantallas pequeñas, alineado a la izquierda en pantallas grandes */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 md:order-1"
        >
          <img src="Prueba.png" className="h-16" alt="Logo" />
        </Link>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <button
          onClick={toggleDropdown}
          type="button"
          className="relative inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-[#73675B] focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menú para pantallas grandes y desplegable para pequeñas */}
        <div
          id="mega-menu-full"
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 bg-[#4e4b4c] md:bg-transparent absolute md:relative top-12 md:top-0 left-0 md:left-auto w-full md:w-auto`}
        >
          <ul className="flex flex-col p-2 md:p-0 mt-4 md:mt-0 border border-gray-600 rounded-lg md:space-x-2 rtl:space-x-reverse md:flex-row md:border-0 md:ml-auto">
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 rounded hover:text-[#D8C3A5] text-xl md:text-lg"
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 rounded hover:text-[#D8C3A5] text-xl md:text-lg"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;