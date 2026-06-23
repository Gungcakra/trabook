import homeImg from "../assets/images/hero.png";

const Home = () => {
  return (
    <section
      className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-primary-lightthin/40 to-[#FEFCFB] pt-28 md:pt-36 pb-16 md:pb-24 px-4"
      id="home"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">
        <div className="flex flex-col items-center md:items-start justify-center order-2 md:order-1">
          <div className="max-w-md w-full flex flex-col gap-6 md:gap-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get started your exciting{" "}
              <span className="text-primary-light">journey</span> with us.
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              A team of experienced tourism professionals will provide you with
              the best advice and tips for your desired place.
            </p>
            <div>
              <a
                href="#destination"
                className="inline-block bg-primary-light text-white border-2 border-primary-light py-3 px-7 rounded-lg font-semibold transition duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-light/40 hover:-translate-y-0.5"
              >
                Discover Now
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <img
            src={homeImg}
            alt="hero"
            className="w-3/4 sm:w-2/3 md:w-full h-auto drop-shadow-xl"
          />
        </div>
      </div>

      <div className="w-full max-w-4xl flex justify-center mt-12 md:mt-16">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center p-6 md:p-8 rounded-2xl bg-white shadow-xl shadow-primary-dark/5 border border-gray-100">
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Location</p>
            <p className="text-gray-500 text-sm">Where Are You Going</p>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Date</p>
            <p className="text-gray-500 text-sm">When You Will Go</p>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Guest</p>
            <p className="text-gray-500 text-sm">Number Of Guest</p>
          </div>
          <button className="w-full py-3 bg-primary-light transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-light/40 hover:-translate-y-0.5 text-white text-center font-semibold rounded-lg">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};
export default Home;
