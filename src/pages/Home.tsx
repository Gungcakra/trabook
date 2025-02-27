import homeImg from "../assets/images/hero.png";
const Home = () => {
  return (
    <>
      <div className="w-full md:min-h-screen  min-h-fit flex flex-col justify-center items-center bg-[#FEFCFB] pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-md w-full flex flex-col gap-10">
              <p className="text-3xl md:text-5xl font-semibold text-left">
                Get started your exciting{" "}
                <span className="text-primary-light">journey</span> with us.
              </p>
              <p className="text-left text-lg">
                A team of experienced tourism professionals will provide you
                with the best advice and tips for your desired place.
              </p>
              <div>
                <a
                  href="#"
                  className="text-primary-light border-2 py-3 px-5 border-primary-light font-semibold hover:bg-primary-light hover:text-white transition duration-300 ease-in-out hover:shadow-md hover:shadow-primary-light"
                >
                  Discover Now
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={homeImg} alt="hero" className="w-3/4 md:w-full h-auto" />
          </div>
        </div>
        <div className="w-full flex justify-center mt-7"></div>
        <div className="w-full flex justify-center mt-7">
          <div className="flex md:w-2/3 w-full justify-center ">
            <div className="grid grid-cols-4 grid-rows-1 p-8 md:gap-14 gap-5 rounded-lg shadow-lg shadow-primary-dark-50">
              <div className="flex flex-col">
                <p className="md:text-lg text-sm">Location</p>
                <p className="text-gray-500 md:text-md text-xs">Where Are You Going</p>
              </div>
              <div className="flex flex-col">
                <p className="md:text-lg text-sm">Date</p>
                <p className="text-gray-500 md:text-md text-xs">When You Will Go</p>
              </div>
              <div className="flex flex-col">
                <p className="md:text-lg text-md">Guest</p>
                <p className="text-gray-500 md:text-md text-xs">Number Of Guest</p>
              </div>
              <div className="flex flex-col">
                <p className="md:p-3 p-1 bg-primary-light transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-md hover:shadow-primary-light text-white text-center font-semibold rounded-md md:text-lg text-sm">
                  Explore Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
