import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blog1 from '../assets/images/blog/blog1.png';
import blog2 from '../assets/images/blog/blog2.png';
import blog3 from '../assets/images/blog/blog3.png';
import blog4 from '../assets/images/blog/blog4.png';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BlogCard from '../components/ui/BlogCard';

const Blog = () => {
  const data = [
    {
      title: "The Amazing Difference a Year of Travelling .",
      image: blog1,
      date: "July 27, 2021",
      link: "/blog",
    },
    {
      title: "Travel far enough, you meet yourself.",
      image: blog2,
      date: "July 27, 2021",
      link: "/blog",
    },
    {
      title: "How to Save Money While Visiting Africa .",
      image: blog3,
      date: "July 27, 2021",
      link: "/blog",
    },
    {
      title: "Reflections on 5 Months of Travel: Time to Hang",
      image: blog4,
      date: "July 27, 2021",
      link: "/blog",
    },
    {
      title: "The Amazing Difference a Year of Travelling .",
      image: blog1,
      date: "July 27, 2021",
      link: "/blog",
    },
    {
      title: "Travel far enough, you meet yourself.",
      image: blog2,
      date: "July 27, 2021",
      link: "/blog",
    },
    {
      title: "How to Save Money While Visiting Africa .",
      image: blog3,
      date: "July 27, 2021",
      link: "/blog",
    },
    {
      title: "Reflections on 5 Months of Travel: Time to Hang",
      image: blog4,
      date: "July 27, 2021",
      link: "/blog",
    },
    {
      title: "The Amazing Difference a Year of Travelling .",
      image: blog1,
      date: "July 27, 2021",
      link: "/blog",
    },
    {
      title: "Travel far enough, you meet yourself.",
      image: blog2,
      date: "July 27, 2021",
      link: "/blog",
    },
    {
      title: "How to Save Money While Visiting Africa .",
      image: blog3,
      date: "July 27, 2021",
      link: "/blog",
    },
    {
      title: "Reflections on 5 Months of Travel: Time to Hang",
      image: blog4,
      date: "July 27, 2021",
      link: "/blog",
    },
    
    
  ];
const scrollLeft = () => {
  const container = document.querySelector('.overflow-x-scroll');
  if (container) {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  const container = document.querySelector('.overflow-x-scroll');
  if (container) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
};
  return (
    <div className="w-full md:min-h-screen min-h-fit flex flex-col justify-center items-center p-4 " id="blog">
      <p className="text-4xl font-bold text-center">
        Get update with <span className="text-primary-light">latest blog</span>
      </p>

      <div className="flex w-full items-center flex-col">
        <div className="blog-container flex md:w-3/4 w-full gap-3 mt-4 overflow-x-scroll scrollbar-hide py-4 " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {data.map((item, index) => (
              <BlogCard 
              key={index}
              title={item.title}
              image={item.image}
              date={item.date}
              link="/destination"
              />
            ))}
        </div>
        <div className="flex w-full justify-center mt-4 gap-2">
          {Array.from({ length: Math.ceil(data.length / 4) }).map((_, index) => (
            <button
              key={index}
              className="duration-300 ease-in-out hover:bg-primary-light rounded-full p-2 hover:text-white w-2 h-2 flex items-center justify-center bg-gray-200"
              onClick={() => {
          const container = document.querySelector('.blog-container');
          if (container) {
            container.scrollTo({ left: index * container.clientWidth, behavior: 'smooth' });
          }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
