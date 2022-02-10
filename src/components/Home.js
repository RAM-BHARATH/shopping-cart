import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import ShoppingCart from './ShoppingCart';

const Home = ({cartItems, updateCount, deleteCartItem, emptyCart}) =>{
    return(
        <div className="home-page">
            <NavBar />
            <ShoppingCart 
                cartItems={cartItems} 
                updateCount={updateCount} 
                deleteCartItem={deleteCartItem} 
                emptyCart={emptyCart}
            />
        </div>
    )
}

export default Home;