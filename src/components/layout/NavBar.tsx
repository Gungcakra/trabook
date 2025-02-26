import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logos/logo.png";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="w-full z-50 top-0 start-0 flex justify-center">
      <div className="md:w-4/5 w-full flex items-center justify-around py-3 px-4">
      
        <a href="/" className="flex items-center space-x-3 ">
          <img src={logo} className="w-[150px]" alt="Trabook Logo" />
        </a>


        <div className="hidden md:flex flex-grow justify-center space-x-6">
          {[
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Destination", link: "/destination" },
            { name: "Tour", link: "/tour" },
            { name: "Blog", link: "/blog" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="font-semibold text-black transition duration-300 ease-in-out hover:text-primary-light"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="bg-white text-primary-light px-4 py-2 rounded-md transition duration-300 ease-in-out font-semibold"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="bg-primary-light text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-light font-semibold"
          >
            Sign Up
          </Link>
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
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Destination", link: "/destination" },
              { name: "Tour", link: "/tour" },
              { name: "Blog", link: "/blog" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="font-semibold text-black transition duration-300 ease-in-out hover:text-primary-light"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Login & Register (di Sidebar saat Mobile) */}
            <li>
              <Link
                to="/login"
                className="font-semibold text-black transition duration-300 ease-in-out hover:text-primary-light"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-primary-light text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-primary-dark block text-center"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
