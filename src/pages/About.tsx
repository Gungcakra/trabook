import signInIcon from "../assets/images/icon/signin.png";
import moneyIcon from "../assets/images/icon/money.png";
import locationIcon from "../assets/images/icon/location.png";

const features = [
  {
    icon: signInIcon,
    title: "Sign Up",
    text: "Completes all the work associated with planning and processing",
  },
  {
    icon: moneyIcon,
    title: "Worth of Money",
    text: "After successful access then book from exclusive deals & pricing",
  },
  {
    icon: locationIcon,
    title: "Explore",
    text: "Start and explore a wide range of exciting travel experience.",
  },
];

const About = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#F7F8FC] py-16 md:py-24 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Things you need <span className="text-primary-light">to do</span>
      </h2>
      <p className="text-center text-gray-500 mt-4 max-w-md text-base md:text-lg">
        We ensure that you'll embark on a perfectly planned, safe vacation at a
        price you can afford.
      </p>

      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-white gap-4 px-6 py-8 rounded-2xl shadow-lg shadow-primary-dark/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-light/10"
          >
            <img src={feature.icon} alt={feature.title} width={44} />
            <p className="text-xl font-semibold">{feature.title}</p>
            <p className="text-gray-600">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default About;
