import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <div className="home-page">
            <p>Home</p>
            <Link to="/shop">
                Enter shop
            </Link>
        </div>
    )
}

export default Home;