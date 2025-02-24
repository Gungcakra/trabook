import homeImg from "../assets/images/hero.png";
const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="grid grid-cols-4 grid-rows-4">
          <div className="md:col-span-2 col-span-4 row-span-5">
            <div className="flex flex-col items-center h-full justify-center">
              <div className="max-w-md w-full flex flex-col gap-10">
                <p className="text-6xl font-semibold text-wrap text-left ">
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
                    className="text-primary-light border-2 py-3 px-5 border-primary-light "
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
      </div>
    </>
  );
};
export default Home;
