import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import des1 from '../assets/images/destination/des1.png';
import des2 from '../assets/images/destination/des2.png';
import des3 from '../assets/images/destination/des3.png';
import des4 from '../assets/images/destination/des4.png';
import Card from '../components/ui/Card';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Destination = () => {
  const data = [
    {
      title: "Marid",
      location: "Paid",
      rating: "4.5",
      price: 850,
      image: des1,
    },
    {
      title: "Forenze",
      location: "Italy",
      rating: "4.5",
      price: 750,
      image: des2,
    },
    {
      title: "Paris",
      location: "France",
      rating: "4.4",
      price: 559,
      image: des3,
    },
    {
      title: "London",
      location: "UK",
      rating: "4.5",
      price: 850,
      image: des4,
    },
    {
      title: "Marid",
      location: "Paid",
      rating: "4.5",
      price: 850,
      image: des1,
    },
    {
      title: "Forenze",
      location: "Italy",
      rating: "4.5",
      price: 750,
      image: des2,
    },
    {
      title: "Paris",
      location: "France",
      rating: "4.4",
      price: 559,
      image: des3,
    },
    {
      title: "London",
      location: "UK",
      rating: "4.5",
      price: 850,
      image: des4,
    },
    
  ];
const scrollLeft = () => {
  const container = document.querySelector('.overflow-x-scroll');
  if (container) {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  const container = document.querySelector('.overflow-x-scroll');
  if (container) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
};
  return (
    <div className="w-full md:min-h-screen min-h-fit flex flex-col justify-center items-center p-4 ">
      <p className="text-4xl font-bold text-center">
        Exclusive <span className="text-primary-light">deals & discounts</span>
      </p>
      <p className="text-center text-gray-500 mt-4 max-w-sm text-lg">
        Discover our fantastic early booking discounts & start planning your
        journey.
      </p>

      <div className="flex w-full items-center flex-col">
        <div className="flex w-3/4 gap-3 mt-4 overflow-x-scroll scrollbar-hide py-4 " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {data.map((item, index) => (
              <Card 
              key={index}
              title={item.title}
              image={item.image}
              location={item.location}
              price={item.price.toString()}
              rating={item.rating}
              link="/destination"
              />
            ))}
        </div>
        <div className="flex w-full justify-center mt-4 gap-2">
            <button className="duration-300 ease-in-out hover:bg-primary-light rounded-full p-2 hover:text-white w-10 h-10 flex items-center justify-center" onClick={scrollLeft}><FontAwesomeIcon icon={faArrowLeft} /></button>

          <button className="duration-300 ease-in-out hover:bg-primary-light rounded-full p-2 hover:text-white w-10 h-10" onClick={scrollRight}><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
    </div>
  );
};
export default Destination;
