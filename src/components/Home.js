import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import ShoppingCart from './ShoppingCart';

const Home = ({cartItems, updateCount, deleteCartItem}) =>{
    return(
        <div className="home-page">
            <p>Home</p>
            <NavBar />
            <Link to="/shop">
                Enter shop
            </Link>
            <ShoppingCart cartItems={cartItems} updateCount={updateCount} deleteCartItem={deleteCartItem}/>
        </div>
    )
}

export default Home;