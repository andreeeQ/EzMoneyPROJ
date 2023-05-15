import { Link } from "react-router-dom";
import "../App.css";

export default function NotFound() {
    return (
        <div className="App">
            <h1>404 NOT FOUND.</h1>
            <h1>Oops! What are you doing here?</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/transactions'>Transactions</Link>
            <Link to='/support'>Support</Link>
        </div>
    )
}