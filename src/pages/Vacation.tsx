import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vac1 from "../assets/images/vacation/vac1.png";
import vac2 from "../assets/images/vacation/vac2.png";
import vac3 from "../assets/images/vacation/vac3.png";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CardVacation from "../components/ui/CardVacation";
import { useRef } from "react";

const Vacation = () => {
  const data = [
    {
      title: "Marid",
      day: "10",
      rating: "4.5",
      price: 850,
      image: vac1,
    },
    {
      title: "Forenze",
      day: "7",
      rating: "4.5",
      price: 750,
      image: vac2,
    },
    {
      title: "Paris",
      day: "10",
      rating: "4.4",
      price: 559,
      image: vac3,
    },
    {
      title: "Marid",
      day: "10",
      rating: "4.5",
      price: 850,
      image: vac1,
    },
    {
      title: "Forenze",
      day: "7",
      rating: "4.5",
      price: 750,
      image: vac2,
    },
    {
      title: "Paris",
      day: "10",
      rating: "4.4",
      price: 559,
      image: vac3,
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
    <div className="w-full md:min-h-screen min-h-fit flex flex-col justify-center items-center p-4 " id="tour">
      <p className="text-4xl font-bold text-center">
        Best <span className="text-primary-light">vacation plan</span>
      </p>
      <p className="text-center text-gray-500 mt-4 max-w-lg text-lg">
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
              day={item.day}
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
