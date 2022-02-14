import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = ({ cartItemCount }) =>{
    return(
        <nav className="navbar">
            <ul>
                <Link className="navlink" to="shopping-cart/">Home</Link>
                <Link className="navlink" to="shopping-cart/shop">Shop</Link>
                <Link className="navlink" to="shopping-cart/cart">Cart{cartItemCount>0?`(${cartItemCount})`:''}</Link>
            </ul>
        </nav>
    )
}

export default NavBar;