import React from "react";
import "../../src/App.css";
import { Link } from "react-router-dom";
let Log=()=>{
  let Vald=()=>{
    let element=document.getElementById("mailin")
    let element1=document.getElementById("mailinpas")
    if((element.value) === window.localStorage.getItem("name")&& (element1.value)=== window.localStorage.getItem("password")){
      window.open("./home") 
    
    }
    else{
      alert("enter a valid details")
    }
  }         
    return(
        <>
        <h1 style={{fontFamily:"cursive",color:"gray",textAlign:"center",marginTop:"20px"}}>Login Form</h1>
        <div className="card Register" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
          <form>
          <input type="email" placeholder="EMAIL"  required className="Rinput" id="mailin" />
          <p style={{fontFamily:"cursive",color:"gray"}}>We'll never share your email with anyone else.</p>
          <input type="password" placeholder="PASSWORD" required className="Rinput" id="mailinpas"/>
          <p style={{fontFamily:"cursive",color:"gray",fontSize:"12px"}}>FORGOT PASSWORD?</p>
          <button type="submit" class="Fbtn" style={{marginTop:"20px",width:"250px"}} onClick={Vald}>Submit</button>

          <Link to="/login">
                <button type="submit" class="Fbtn" style={{marginTop:"20px",width:"250px"}}>cancel</button>
          </Link> 
          </form>
        </div>
        </>
    )

}
export default Log