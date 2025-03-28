import {  faPaperPlane, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
    title: string;
    image: string;
    day: string;
    price: string;
    rating: string;
    link: string;
}

const CardVacation: React.FC<CardProps> = ({ title, image, day, price, rating }) => {
    return (
        <div className="flex flex-col border rounded-lg shadow-md min-w-[370px] h-[400px] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-light/50 hover:cursor-pointer">
           <div className="w-full h-[290px]">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
           </div>
          <div className="flex flex-col w-full h-full justify-center p-4">
            <div className="flex justify-between w-full">
                <p className="font-semibold text-xl">{title}</p>
                <p className="font-semibold text-xl text-primary-light">${price}</p>
            </div>
            <div className="flex justify-between w-full text-gray-500">
                <p className="font-semibold text-lg"><FontAwesomeIcon icon={faPaperPlane} className="text-primary-light" /> &nbsp;{day} Days Trip</p>
                <p className="text-gray-500 text-lg"><FontAwesomeIcon icon={faStar} className="text-yellow-400" />{rating}</p>

            </div>
          </div>
        </div>
    );
}

export default CardVacation;