import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog ,  handleAddToBookmark ,handleMarkAsRead} ) => {
    const {title , cover , author , posted_date, author_img , reading_time , hashtags} = blog;

    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-4' src={cover} alt={`Cover Picture of Title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-4 mb-4'>
                   <img className='w-14 rounded-[30%]' src={author_img} alt="" />
                   <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                   </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-extrabold mb-3">{title}</h2>
            <p className=' text-blue-500'>
                {
                    hashtags.map(hash => <span><a href="">#{hash}</a></span>)
                }
            </p>
            <button
             onClick={ () => handleMarkAsRead(reading_time)}
             className='text-purple-500 font-bold underline'>Mark As Read</button>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired ,
    handleAddToBookmark :PropTypes.func ,
    handleMarkAsRead: PropTypes.func
}

export default Blog;