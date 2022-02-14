import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = ({ cartItemCount }) =>{
    return(
        <nav className="navbar">
            <ul>
                <Link className="navlink" to="/">Home</Link>
                <Link className="navlink" to="/shop">Shop</Link>
                <Link className="navlink" to="/cart">Cart{cartItemCount>0?`(${cartItemCount})`:''}</Link>
            </ul>
        </nav>
    )
}

export default NavBar;