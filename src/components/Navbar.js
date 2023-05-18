import walletlogo from "./walletlogo.png";
import "./NavbarStyles.css";
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state={clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
    return(

        <>
        <nav>
        <Link to="/dashboard">
            <img src={walletlogo} alt="logo.png" width="49" height="49"></img>
            <h1 className="Logo">EzMoney</h1>
        </Link>
        
        <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <li><Link to="/dashboard">Dashboard</Link> </li>
                <li><Link to="/aboutus">About Us</Link> </li>
                <li><Link to="/support">Support</Link> </li>
            </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
            <FontAwesomeIcon 
            icon={this.state.clicked ? (faCircleXmark) : (faBars)}></FontAwesomeIcon>
        </div>
        </nav>
        </>
    )
}
}

export default Navbar;