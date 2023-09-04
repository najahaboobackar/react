import  { Component } from "react";
import "./navbarStyle.css";
import { menuItems } from "./menuitem";

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
                <ul className={this.state.clicked?"nav-menu active":"nav-menu"} >
                    {menuItems.map((item, index) => (
                        <>
                            <li>
                                <a  className ={item.cName}href="/">
                                    <i className={item.icon}></i>{item.title}
                                </a>
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
