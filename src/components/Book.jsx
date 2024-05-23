import './Book.css'
import PropTypes from 'prop-types';

const Book = ({book, handleAddToCart}) => {
    const {price, img, id, name} = book
    return (
        <div className='book'>
            <img src={img}></img>
            <br></br>
            <button onClick={() => handleAddToCart(book)}>Add To Cart</button>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Book;

