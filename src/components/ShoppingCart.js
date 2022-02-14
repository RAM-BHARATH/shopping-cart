import { Link } from "react-router-dom";
import '../styles/ShoppingCart.css';
const ShoppingCart = ({ cartItems, updateCount, deleteCartItem, emptyCart, totalAmount }) =>{

    // const [currItemCount, setCurrItemCount] = useState(findCartItemById(currItemId)?findCartItemById(currItemId).count:1);

    return(
        <div className="Cart">
            <div>
                <h1>Your cart</h1>
                <button onClick={()=>(emptyCart())} className="empty-cart">Empty cart</button>
                <h2>Total Cost: ${totalAmount}</h2>
                {/* <Link to="/shop">Go to Shop</Link>
                <Link to="/">Go home</Link> */}
            </div>
            {cartItems.length>0?
            <div className="items">
                {cartItems.map(cartItem=>{
                    return(
                        <div key={cartItem.id} className="item cart-item">
                            {/* {console.log("Shopping cart")}
                            {console.log(cartItem)} */}
                            <img src={cartItem.cartItemImageLocation} alt="" />
                            <div class="cart-item-info-container">
                                <div>{cartItem.name}</div>
                                <div className="cart-item-options">
                                    <button onClick={()=>(updateCount(cartItem.id, cartItem.count-1))}>-</button>
                                    <div>{cartItem.count}</div>
                                    <button onClick={()=>(updateCount(cartItem.id, cartItem.count+1))}>+</button> 
                                    <button onClick={()=>(deleteCartItem(cartItem.id))} className='delete'>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            :'Your cart is empty'}
        </div>
        
    )
}

export default ShoppingCart;