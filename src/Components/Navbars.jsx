import React from "react";
import { Link } from "react-router-dom";

export default function Navbars(){
return(
    <>
    <nav>
     <span>Pixabay</span>
     <ul>
        <li>Home</li>
        <Link to="/login" style={{color:"white"}}><li>Login</li></Link>
        <Link to="/registerss" style={{color:"white"}}><li>Register</li></Link>
     </ul>
    </nav>
    </>
)
}
