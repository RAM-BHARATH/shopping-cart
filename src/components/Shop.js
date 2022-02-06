import { useState } from "react";
import Item from "./Item";
import { Link } from 'react-router-dom';
import ShoppingCart from "./ShoppingCart";
import { useEffect } from "react";
const Shop = ({ items, addToCart, cartItems, findCartItemById, updateCount, deleteCartItem }) =>{

    return(
        <div className="Shop">
            <p>Shop</p>
            <div className="items">
                {items.map(item=>(
                    <Item key={item.itemId} item={item} id={item.itemId} addToCart={addToCart} cartItems={cartItems} findCartItemById={findCartItemById} updateCount={updateCount}/>
                ))}
            </div>
            <ShoppingCart cartItems={cartItems} updateCount={updateCount} deleteCartItem={deleteCartItem}/>
            <Link to="/cart">
                Go to Cart
            </Link>
        </div>
    )
}

export default Shop;