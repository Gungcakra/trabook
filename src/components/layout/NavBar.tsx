import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logos/logo.png";

const navLinks = [
  { name: "Home", a: "#home" },
  { name: "About", a: "#about" },
  { name: "Destination", a: "#destination" },
  { name: "Tour", a: "#tour" },
  { name: "Blog", a: "#blog" },
];

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="w-full z-50 top-0 start-0 flex justify-center fixed bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="md:w-4/5 w-full flex items-center justify-between py-3 px-4 md:px-6">
        <a href="#home" className="flex items-center space-x-3 shrink-0">
          <img src={logo} className="w-[130px] md:w-[150px]" alt="Trabook Logo" />
        </a>

        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.a}
              className="font-semibold text-gray-800 transition duration-300 ease-in-out hover:text-primary-light"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-3 shrink-0">
          <a
            href="/login"
            className="text-primary-light px-4 py-2 rounded-lg transition duration-300 ease-in-out font-semibold hover:bg-primary-lightthin"
          >
            Sign In
          </a>
          <a
            href="/register"
            className="bg-primary-light text-white px-5 py-2 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-light/40 hover:-translate-y-0.5 font-semibold"
          >
            Sign Up
          </a>
        </div>

        <button
          onClick={() => setShowSidebar(true)}
          aria-label="Open menu"
          className="md:hidden p-2 w-10 h-10 text-primary-light rounded-lg hover:bg-primary-lightthin transition"
        >
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile sidebar + backdrop */}
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <img src={logo} className="w-[130px]" alt="Trabook Logo" />
          <button
            onClick={() => setShowSidebar(false)}
            aria-label="Close menu"
            className="p-2 w-10 h-10 text-gray-600 rounded-lg hover:bg-gray-100 transition"
          >
            <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-2">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.a}
                onClick={() => setShowSidebar(false)}
                className="block px-3 py-2 rounded-lg font-semibold text-gray-800 transition duration-300 ease-in-out hover:bg-primary-lightthin hover:text-primary-light"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="/login"
              className="block text-center text-primary-light border border-primary-light px-4 py-2 rounded-lg font-semibold transition duration-300 hover:bg-primary-lightthin"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="block text-center bg-primary-light text-white px-4 py-2 rounded-lg font-semibold transition duration-300 hover:shadow-lg hover:shadow-primary-light/40"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
