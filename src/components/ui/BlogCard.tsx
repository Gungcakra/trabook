

interface CardProps {
    title: string;
    image: string;
    date: string;
    link: string;
}

const BlogCard: React.FC<CardProps> = ({ title, image, date }) => {
    return (
        <div className="snap-start shrink-0 flex flex-col bg-white border border-gray-100 rounded-2xl shadow-md w-[270px] h-[400px] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-light/20 hover:cursor-pointer">
           <div className="w-full h-[290px] overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
           </div>
          <div className="flex flex-col w-full h-full justify-center p-4 gap-2">
            <p className="font-semibold text-lg leading-snug">{title}</p>
            <p className="text-gray-500 text-sm">{date}</p>
          </div>
        </div>
    );
}

export default BlogCard;