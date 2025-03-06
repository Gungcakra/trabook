import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logos/logo.png";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="w-full z-50 top-0 start-0 flex justify-center fixed bg-white">
      <div className="md:w-4/5 w-full flex items-center justify-around py-3 px-4">
      
        <a href="/" className="flex items-center space-x-3 ">
          <img src={logo} className="w-[150px]" alt="Trabook Logo" />
        </a>


        <div className="hidden md:flex flex-grow justify-center space-x-6">
          {[
            { name: "Home", a: "#home" },
            { name: "About", a: "#about" },
            { name: "Destination", a: "#destination" },
            { name: "Tour", a: "#tour" },
            { name: "Blog", a: "#blog" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.a}
              className="font-semibold text-black transition duration-300 ease-in-out hover:text-primary-light"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          <a
            href="/login"
            className="bg-white text-primary-light px-4 py-2 rounded-md transition duration-300 ease-in-out font-semibold"
          >
            Sign In
          </a>
          <a
            href="/register"
            className="bg-primary-light text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-light font-semibold"
          >
            Sign Up
          </a>
        </div>


        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="md:hidden p-2 w-10 h-10 text-primary-light rounded-lg"
        >
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>


        <div
          className={`fixed top-0 left-0 h-full w-64 z-40 bg-white transition-transform ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col p-4 gap-5 h-full">
            {[
              { name: "Home", a: "/" },
              { name: "About", a: "/about" },
              { name: "Destination", a: "/destination" },
              { name: "Tour", a: "/tour" },
              { name: "Blog", a: "/blog" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.a}
                  className="font-semibold text-black transition duration-300 ease-in-out hover:text-primary-light"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Login & Register (di Sidebar saat Mobile) */}
            <li>
              <a
                href="/login"
                className="bg-primary-light text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-primary-dark block text-center"
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="bg-primary-light text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-primary-dark block text-center"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
