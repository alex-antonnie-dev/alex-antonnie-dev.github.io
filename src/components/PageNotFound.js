import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return(
        <div className="mt-5">
            <h1>Page not found</h1>
            <p>The page you are looking for does not exist.</p>
            <p><Link to="/dg-movies-list">clear here</Link> to go to the movies list</p>
        </div>
    )
}

export default PageNotFound;