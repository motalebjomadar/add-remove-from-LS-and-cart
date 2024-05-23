import { useEffect, useState } from "react";
import Book from "./Book";
import './Books.css'
import { addToLS, getStoredCart, removeFromLS } from "../utilities/localStorage";
import Cart from "./Cart";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    // load cart from local storage
    useEffect(() => {
        if(books.length>0){
            const storedCart = getStoredCart();
            const savedCart = [];
            for(const id of storedCart){
                const book = books.find(book => book.id === id)
                if(book){
                    savedCart.push(book);
                }
            }
            setCart(savedCart);
        }

    }, [books])

    const handleAddToCart = book => {
        const newBook = [...cart, book]
        setCart(newBook)
        addToLS(book.id)
    }

    const handleRemoveFromCart = id => {
        // remove from cart visually
        const remainingCart = cart.filter(book => book.id !== id);
        setCart(remainingCart);
        // remove from LS
        removeFromLS(id);
    }

    return (
        <div>
            
            <h1>Books Available {books.length}</h1>
            <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
            <div className='book-container'>
                {
                    books.map(book => <Book handleAddToCart={handleAddToCart} key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;