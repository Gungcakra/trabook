

interface CardProps {
    title: string;
    image: string;
    date: string;
    link: string;
}

const BlogCard: React.FC<CardProps> = ({ title, image, date, link }) => {
    return (
        <div className="flex flex-col border rounded-lg shadow-md min-w-[270px] h-[400px] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-light/50 hover:cursor-pointer">
           <div className="w-full h-[290px]">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
           </div>
          <div className="flex flex-col w-full h-full justify-center p-4">
            <div className="flex justify-between w-full">
                <p className="font-semibold text-xl">{title}</p>
            </div>
            <div className="flex justify-between w-full text-gray-500">
                <p className="font-semibold text-"> &nbsp;{date}</p>
            </div>
          </div>
        </div>
    );
}

export default BlogCard;