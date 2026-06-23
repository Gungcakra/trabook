import image from "../assets/images/about/comment.png";

const PeopleAbout = () => {
  return (
    <section
      className="w-full flex flex-col md:flex-row justify-center items-center bg-[#F7F8FC] py-16 md:py-24 px-4 gap-10 md:gap-6"
      id="about"
    >
      <div className="w-full md:w-1/2 max-w-lg flex flex-col items-center md:items-end">
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            What people say <br />
            <span className="text-primary-light">About Us</span>
          </h2>
          <p className="text-base md:text-lg max-w-md text-gray-600">
            Our Clients send us bunch of smilies with our services and we love
            them.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src={image}
          alt="comment"
          className="w-4/5 sm:w-3/5 md:w-5/6 max-w-lg h-auto"
        />
      </div>
    </section>
  );
};
export default PeopleAbout;
