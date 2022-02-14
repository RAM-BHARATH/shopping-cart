import NavBar from './NavBar';
import ShoppingCart from './ShoppingCart';

const Cart = ({ cartItems, updateCount, deleteCartItem, emptyCart, totalAmount }) =>{
    return(
        <>
            {/* <NavBar /> */}
            <ShoppingCart cartItems={cartItems} updateCount={updateCount} deleteCartItem={deleteCartItem} emptyCart={emptyCart} totalAmount={totalAmount}/>
        </>
    )
}

export default Cart