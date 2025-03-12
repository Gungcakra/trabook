import { faLocationPin, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
    title: string;
    image: string;
    location: string;
    price: string;
    rating: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, image, location, price, rating }) => {
    return (
        <div className="flex flex-col border rounded-lg shadow-md min-w-[270px] h-[400px] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-light/50 hover:cursor-pointer">
           <div className="w-full h-[290px]">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
           </div>
          <div className="flex flex-col w-full h-full justify-center p-4">
            <div className="flex justify-between w-full">
                <p className="font-semibold text-xl">{title}</p>
                <p className="text-gray-500 text-lg"><FontAwesomeIcon icon={faStar} className="text-yellow-400" />{rating}</p>
            </div>
            <div className="flex justify-between w-full text-gray-500">
                <p className="font-semibold text-lg"><FontAwesomeIcon icon={faLocationPin} /> &nbsp;{location}</p>
                <p className="font-semibold text-lg text-primary-light bg-primary-lightthin rounded-md px-2">${price}</p>
            </div>
          </div>
        </div>
    );
}

export default Card;