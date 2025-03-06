import signInIcon from "../assets/images/icon/signin.png";
import moneyIcon from "../assets/images/icon/money.png";
import locationIcon from "../assets/images/icon/location.png";

const About = () => {
  return (
    <div className="w-full md:min-h-screen min-h-fit flex flex-col justify-center items-center bg-[#F7F8FC] p-4" id="">
      <p className="text-4xl font-bold text-center">
        Things you need <span className="text-primary-light">to do</span>
      </p>
      <p className="text-center text-gray-500 mt-4 max-w-sm text-lg">
        We ensure that you'll embark on a perfectly planned, safe vacation at a
        price you can afford.
      </p>

      <div className="flex justify-center w-full mt-10">
        <div className="w-full flex flex-wrap gap-4 justify-center">
          <div className="flex flex-col bg-white w-full sm:w-1/3 md:w-1/4 gap-4 px-4 py-8 rounded-lg shadow-lg">
            <img src={signInIcon} alt="icon" width={40} />
            <p className="text-xl font-semibold">Sign Up</p>
            <p className="text-md">
              Completes all the work associated with planning and processing
            </p>
          </div>
          <div className="flex flex-col bg-white w-full sm:w-1/3 md:w-1/4 gap-4 px-4 py-8 rounded-lg shadow-lg">
            <img src={moneyIcon} alt="icon" width={40} />
            <p className="text-xl font-semibold">Worth of Money</p>
            <p className="text-md">
              After successful access then book from exclusive deals & pricing
            </p>
          </div>
          <div className="flex flex-col bg-white w-full sm:w-1/3 md:w-1/4 gap-4 px-4 py-8 rounded-lg shadow-lg">
            <img src={locationIcon} alt="icon" width={40} />
            <p className="text-xl font-semibold">Explore</p>
            <p className="text-md">
              Start and explore a wide range of exciting travel experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
