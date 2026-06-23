import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/logos/logo.png";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../../assets/css/contact.css"
const Footer = () => {
  return (
    <div className="w-full min-h-fit bg-[#F7F8FC] flex flex-col items-center px-4">
        <div className="contact flex flex-col justify-center items-center w-full max-w-5xl py-12 md:py-16 px-6 gap-8 rounded-2xl">
            <p className="text-center text-2xl sm:text-4xl md:text-5xl max-w-2xl text-white font-semibold">Subscribe and get exclusive deals & offer</p>

            <div className="flex flex-col sm:flex-row bg-white sm:justify-between rounded-lg p-2 w-full max-w-xl gap-2 shadow-lg">
                <input
                    type="email"
                    className="bg-transparent text-black flex-grow px-4 py-2 outline-none rounded-lg"
                    placeholder="Enter your email address"
                />
                <button className="bg-primary-light text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300 whitespace-nowrap">
                    Subscribe
                </button>
            </div>
        </div>
      <div className="flex flex-col justify-center w-full max-w-5xl py-12">
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
            <img src={logo} alt="Trabook Logo" className="w-40" />
            <p className="text-md text-[#666666] max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="duration-300 ease-in-out w-8 h-8 text-2xl p-5 bg-white hover:bg-primary-light rounded-full flex items-center justify-center text-black hover:text-white shadow-md"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="#"
                className="duration-300 ease-in-out w-8 h-8 text-2xl p-5 bg-white hover:bg-primary-light rounded-full flex items-center justify-center text-black hover:text-white shadow-md"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="duration-300 ease-in-out w-8 h-8 text-2xl p-5 bg-white hover:bg-primary-light rounded-full flex items-center justify-center text-black hover:text-white shadow-md"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Company</p>
              <ul className="space-y-2">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Career</a>
                </li>
                <li>
                    <a href="#">Logistic</a>
                </li>
                <li>
                    <a href="#">Privacy & Policy</a>
                </li>
              </ul>
            </div>
          
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Contact</p>
              <ul className="space-y-2">
                <li>
                    <a href="#">Help/FAQ</a>
                </li>
                <li>
                    <a href="#">Press</a>
                </li>
                <li>
                    <a href="#">Affilates</a>
                </li>
              </ul>
            </div>
          
            <div className="flex flex-col gap-4">
              <p className="font-semibold">More</p>
              <ul className="space-y-2">
                <li>
                    <a href="#">Press Centre</a>
                </li>
                <li>
                    <a href="#">Our Blog</a>
                </li>
                <li>
                    <a href="#">Low fare tips</a>
                </li>
              </ul>
            </div>
          
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0"></hr>
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-3 text-center">
          <p className="text-sm md:text-base text-gray-400">
            Copyright,{" "}
            <a href="https://github.com/GungCakra" className="font-semibold hover:text-primary-light transition-colors">
              Cakra Jaya
            </a>{" "}
            {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-sm md:text-base text-gray-400">Terms & Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
