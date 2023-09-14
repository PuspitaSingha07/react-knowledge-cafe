import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        <div className="md:w-1/3 bg-red-50 mt-5">
            <div>
                <h2 className="text-2xl font-bold p-2 text-center mb-5 border-4 rounded-xl border-red-800">Spent Time on Reading: {readingTime}</h2>
            </div>
            <h2 className="text-3xl mb-6 font-semibold text-center">Bookmarked Blogs:{bookmarks.length}</h2>

            {
               bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
        </div>
        
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;