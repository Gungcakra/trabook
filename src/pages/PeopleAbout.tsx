import image from "../assets/images/about/comment.png";
const PeopleAbout = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-[#F7F8FC]" id="about">
      <div className="flex flex-col w-2/4 h-1/2  items-center">
        <div className="1/2 flex flex-col items-start gap-5">
          <p className="text-4xl font-bold text-start">
            What people say <br />
            <span className="text-primary-light">About Us</span>
          </p>
          <p className="text-lg text-start max-w-lg">
            Our Clients send us bunch of smilies with our services and we love
            them.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-2/4 justify-end">
        <img src={image} alt="comment" className="w-5/6" />
      </div>
    </div>
  );
};
export default PeopleAbout;
