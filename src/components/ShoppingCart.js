import { Link } from "react-router-dom";

const ShoppingCart = ({ cartItems, updateCount, deleteCartItem, emptyCart }) =>{

    // const [currItemCount, setCurrItemCount] = useState(findCartItemById(currItemId)?findCartItemById(currItemId).count:1);

    return(
        <div>
            <div>
                <h1>Your cart</h1>
                <button onClick={()=>(emptyCart())}>Empty cart</button>
                {/* <Link to="/shop">Go to Shop</Link>
                <Link to="/">Go home</Link> */}
            </div>
            {cartItems.length>0?
            <ol>
                {cartItems.map(cartItem=>{
                    return(
                        <li key={cartItem.id}>
                            {console.log("Shopping cart")}
                            {console.log(cartItem)}
                            <span>{cartItem.name},{cartItem.count}</span>
                            <button onClick={()=>(updateCount(cartItem.id, cartItem.count+1))}>+</button> 
                            <button onClick={()=>(updateCount(cartItem.id, cartItem.count-1))}>-</button>
                            <button onClick={()=>(deleteCartItem(cartItem.id))}>Delete</button>
                        </li>
                    )
                })}
            </ol>
            :'Your cart is empty'}
        </div>
        
    )
}

export default ShoppingCart;