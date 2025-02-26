import homeImg from "../assets/images/hero.png";
const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-[#FEFCFB]">
        <div className="grid grid-cols-4 grid-rows-4">
          <div className="md:col-span-2 col-span-4 row-span-5">
            <div className="flex flex-col items-center h-full justify-center">
              <div className="max-w-md w-full flex flex-col gap-10">
                <p className="md:text-6xl text-5xl font-semibold text-wrap text-left ">
                  Get started your exciting{" "}
                  <span className="text-primary-light">journey</span> with us.
                </p>
                <p className="text-left text-lg">
                  A team of experienced tourism professionals will provide you
                  with the best advice and tips for your desired place.
                </p>
                <div className="">
                  <a
                    href="#"
                    className="text-primary-light border-2 py-3 px-5 border-primary-light font-semibold hover:bg-primary-light hover:text-white transition duration-300 ease-in-out hover:shadow-md hover:shadow-primary-light"
                  >
                    Discover Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-4 row-span-5">
            <img src={homeImg} alt="hero" />
          </div>
        </div>
        <div className="w-full flex justify-center mt-7">
          <div className="flex w-2/3 justify-center ">
            <div className="grid grid-cols-4 grid-rows-1 p-8 gap-14 rounded-lg shadow-lg shadow-primary-dark-50">
              <div className="flex flex-col">
                <p className="">Location</p>
                <p className="text-gray-500">Where Are You Going</p>
              </div>
              <div className="flex flex-col">
              <p className="">Date</p>
              <p className="text-gray-500">When You Will Go</p>
              </div>
              <div className="flex flex-col">
              <p>Guest</p>
              <p className="text-gray-500">Number Of Guest</p>
              </div>
              <div className="flex flex-col">
                <p className="p-3 bg-primary-light shadow-md shadow-primary-light text-white text-center font-semibold">Explore Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
