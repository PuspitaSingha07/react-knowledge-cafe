import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='p-4 bg-orange-100 border-2 mb-4 m-4 rounded-lg '>
            <h2 className="text-2xl font-medium">{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object
}

export default Bookmark;