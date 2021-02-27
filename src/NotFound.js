import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry!!!</h1>
            <p>The requested page is not available...</p>
            <Link to="/">Back to homepage</Link>
        </div>
    );
}
 
export default NotFound;
