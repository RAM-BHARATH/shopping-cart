import Item from "./Item";
import ShoppingCart from "./ShoppingCart";
import NavBar from "./NavBar";
import '../styles/Shop.css'

const Shop = ({ items, addToCart, cartItems, findCartItemById, updateCount, deleteCartItem, emptyCart, totalAmount }) =>{

    return(
        <div className="Shop">
            {/* <NavBar /> */}
            <div className="items">
                {items.map(item=>(
                    <Item key={item.itemId} item={item} id={item.itemId} addToCart={addToCart} cartItems={cartItems} findCartItemById={findCartItemById} updateCount={updateCount}/>
                ))}
            </div>
            <ShoppingCart cartItems={cartItems} updateCount={updateCount} deleteCartItem={deleteCartItem} emptyCart={emptyCart} totalAmount={totalAmount}/>
        </div>
    )
}

export default Shop;