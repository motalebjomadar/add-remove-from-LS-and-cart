import './Cart.css'
import PropTypes from 'prop-types';

const Cart = ({cart, handleRemoveFromCart}) => {
    
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div className='cart-container'>
                {
                    cart.map(book => <div key={book.id}>
                        <img src={book.img}></img>
                        <button onClick={()=>handleRemoveFromCart(book.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
        
        
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;