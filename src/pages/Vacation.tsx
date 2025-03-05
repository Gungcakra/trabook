import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import des1 from "../assets/images/destination/des1.png";
import des2 from "../assets/images/destination/des2.png";
import des3 from "../assets/images/destination/des3.png";
import des4 from "../assets/images/destination/des4.png";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CardVacation from "../components/ui/CardVacation";
import { useRef } from "react";

const Vacation = () => {
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

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full md:min-h-screen min-h-fit flex flex-col justify-center items-center p-4 ">
      <p className="text-4xl font-bold text-center">
        Best <span className="text-primary-light">vacation plan</span>
      </p>
      <p className="text-center text-gray-500 mt-4 max-w-sm text-lg">
        Plan your perfect vacation with our travel agency. Choose among hundreds
        of all-inclusive offers!
      </p>

      <div className="flex w-full items-center flex-col">
        <div className="flex w-3/4 justify-end mt-4 gap-2">
          <button
            className="duration-300 ease-in-out hover:bg-primary-light rounded-full p-2 hover:text-white w-10 h-10 flex items-center justify-center"
            onClick={scrollLeft}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <button
            className="duration-300 ease-in-out hover:bg-primary-light rounded-full p-2 hover:text-white w-10 h-10"
            onClick={scrollRight}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div
          ref={containerRef}
          className="flex md:w-3/4 w-full gap-3 mt-4 overflow-x-scroll scrollbar-hide py-4 "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {data.map((item, index) => (
            <CardVacation
              key={index}
              title={item.title}
              image={item.image}
              location={item.location}
              price={item.price.toString()}
              rating={item.rating}
              link="/Vacation"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Vacation;
