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
    <section className="w-full flex flex-col justify-center items-center py-16 md:py-24 px-4" id="tour">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Best <span className="text-primary-light">vacation plan</span>
      </h2>
      <p className="text-center text-gray-500 mt-4 max-w-lg text-base md:text-lg">
        Plan your perfect vacation with our travel agency. Choose among hundreds
        of all-inclusive offers!
      </p>

      <div className="flex w-full items-center flex-col">
        <div className="flex md:w-3/4 w-full justify-end mt-6 gap-3">
          <button
            aria-label="Scroll left"
            className="border border-gray-200 duration-300 ease-in-out hover:bg-primary-light hover:border-primary-light rounded-full hover:text-white w-11 h-11 flex items-center justify-center"
            onClick={scrollLeft}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <button
            aria-label="Scroll right"
            className="border border-gray-200 duration-300 ease-in-out hover:bg-primary-light hover:border-primary-light rounded-full hover:text-white w-11 h-11 flex items-center justify-center"
            onClick={scrollRight}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div
          ref={containerRef}
          className="flex md:w-3/4 w-full gap-5 mt-4 overflow-x-auto scrollbar-hide py-4 snap-x snap-mandatory"
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
    </section>
  );
};
export default Vacation;
