import  { Component } from "react";
import "./navbarStyle.css";
import { menuItems } from "./menuitem";
import {Link} from "react-router-dom";

class Navbar extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})

    }

    render(){
        return(
            <nav className="NavbarItems" >
                <h1 className="navbar-logo">trippy</h1>
                <div className="menu-icons"onClick={this.handleClick}>
                    <i className={this.state.clicked?"fas fa-bars":"fas fa-times"}></i>
                
                </div>
                <ul className={this.state.clicked?"nav-menu ":"nav-menu active"} >
                    {menuItems.map((item, index) => (
                        <>
                            <li>
                                <Link  className ={item.cName}to={item.url}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        </>
                    ))}
                </ul>
                <button>sign up </button>
            </nav>
        )

    }
}

export default Navbar;
