import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="mt-5">
            <h1>Welcome to DG movies</h1>
            <p>Check out our <Link to="/">movies collection</Link></p>
        </div>
    )
}

export default Home;