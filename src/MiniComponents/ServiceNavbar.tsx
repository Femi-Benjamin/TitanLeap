import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const ServiceNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <header className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <Link to="/">
          <div className="flex-shrink-0">
            <img className="w-40" src={Logo} alt="titanleaplogo" />
          </div>
        </Link>
        <nav
          className={`
          ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 "}
          md:max-h-full md:opacity-100 absolute md:relative top-full md:top-auto left-0 md:left-auto backdrop-blur sm:backdrop-blur md:border-none border-b-2 border-gray-300  md:bg-transparent w-full md:w-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0 px-4 md:px-0 overflow-hidden transition-all duration-300 ease-in-out md:transition-none md:overflow-visible md:font-semibold text-xl font-bold md:text-purple-300
        `}
        >
          <a
            href="#"
            className=" hover:text-primary px-3 py-2 rounded-md textlg"
          >
            About us
          </a>
          <a
            href="#"
            className=" hover:text-primary px-3 py-2 roundedmd textlg"
          >
            Cases
          </a>
          <a
            href="#"
            className=" hover:text-primary px-3 py-2 rounded-md textlg"
          >
            Clients
          </a>
          <a
            href="#"
            className=" hover:text-primary px-3 py-2 rounded-md textlg"
          >
            Services
          </a>
          <a
            href="#"
            className=" hover:text-primary px-3 py-2 rounded-md text-lg"
          >
            Contacts
          </a>
        </nav>
        <div className="flex items-center">
          <button className="bg-white text-primary font-bold px-4 py-2 rounded-lg border border-primary">
            Let's talk
          </button>
          <button
            className="ml-4 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default ServiceNavbar;
