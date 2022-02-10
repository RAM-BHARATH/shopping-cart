import NavBar from './NavBar';
import ShoppingCart from './ShoppingCart';

const Cart = ({ cartItems, updateCount, deleteCartItem, emptyCart }) =>{
    return(
        <>
            <NavBar />
            <ShoppingCart cartItems={cartItems} updateCount={updateCount} deleteCartItem={deleteCartItem} emptyCart={emptyCart}/>
        </>
    )
}

export default Cart