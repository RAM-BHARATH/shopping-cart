import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../styles/Home.css'

const Home = ({cartItems, updateCount, deleteCartItem, emptyCart}) =>{
    return(
        <div className="home-page">
            <NavBar />
            <div className="visit-shop">
                <div className="shop-tag">
                    Visit your favourite Anime Toy Spot!!
                </div>
                <Link to="/shop" className="link-visit-shop">Visit Shop</Link>
            </div>
        </div>
    )
}

export default Home;