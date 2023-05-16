import walletlogo from "./walletlogo.png";
import "./NavbarStyles.css";

import { Component } from "react";
import { Link } from "react-router-dom";

class NavbarEntry extends Component {
    state={clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
    return(

        <>
        <nav>
        <Link to="/">
            <img src={walletlogo} alt="logo.png" width="49" height="49"></img>
            <h1 className="Logo">EzMoney</h1>
        </Link>
        
        <div>
            
        </div>
        
        </nav>
        </>
    )
}
}

export default NavbarEntry;