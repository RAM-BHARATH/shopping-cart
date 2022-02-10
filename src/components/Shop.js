import Item from "./Item";
import { Link } from 'react-router-dom';
import ShoppingCart from "./ShoppingCart";
import NavBar from "./NavBar";

const Shop = ({ items, addToCart, cartItems, findCartItemById, updateCount, deleteCartItem, emptyCart }) =>{

    return(
        <div className="Shop">
            <NavBar />
            <p>Shop</p>
            <div className="items">
                {items.map(item=>(
                    <Item key={item.itemId} item={item} id={item.itemId} addToCart={addToCart} cartItems={cartItems} findCartItemById={findCartItemById} updateCount={updateCount}/>
                ))}
            </div>
            <ShoppingCart cartItems={cartItems} updateCount={updateCount} deleteCartItem={deleteCartItem} emptyCart={emptyCart}/>
        </div>
    )
}

export default Shop;