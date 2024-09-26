import React, { useState } from 'react';
import './Shop.css'; 

const products = [
  { id: 1, name: 'Product 1', price: 50 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 20 },
];

function Shop() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Welcome to the Gabster!</h1>
      
      <div>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <p key={index}>{item.name} - ₱{item.price}</p>
            ))}
          </div>
        )}
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Price: ₱{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h3>Total: ₱{totalPrice}</h3>
    </div>
  );
}

export default Shop;
