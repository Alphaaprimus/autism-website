import React ,{ useContext } from "react";
import {Link} from "react-router-dom";
import Logo from "../images/autism.png"
import { AuthContext } from "../context/authContext.jsx";

const Navbar = () => {

    const {currentUser,logout} = useContext(AuthContext); 

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                    <img className="image" src={Logo} alt=""/>
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=symptoms">
                        <h5>Symptoms</h5>
                    </Link>
                    <Link className="link" to="/?cat=treatment">
                        <h5>Treatment</h5>
                    </Link>
                    <Link className="link" to="/?cat=medicine">
                        <h5>Medicine</h5>
                    </Link>
                    <Link className="link" to="/?cat=cases">
                        <h5>Cases</h5>
                    </Link>
                    <Link className="link" to="/?cat=hospitals">
                        <h5>Hospitals</h5>
                    </Link>
                    <span>{currentUser?.username}</span>
                    {currentUser ? 
                    (<span onClick={logout}>Logout</span>) : (<Link className="link" to="/login">Login</Link>)}
                    <span className="write">
                        <Link className="link" to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar