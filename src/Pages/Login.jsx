


import React from 'react'
import { Link } from 'react-router-dom'
export default function Login(){

  let logValidation=()=>{
    let element=document.getElementById("email1")
    let element1=document.getElementById("passwrd1")

    if((element.value)===window.localStorage.getItem("email")&&(element1.value)===window.localStorage.getItem("password")){
     window.open("./")
    }
    else{
      alert("enter a valid details")
    }

  }
  return(
    <>
    <div id='wholelog'>
        <img src="https://cdn.pixabay.com/photo/2023/11/16/15/49/ai-generated-8392596_640.png" alt="rose"  />
        <div className="mainlog">
      <h2>Login</h2>
      
      <label htmlFor="" id='em'>Email :</label>
       <input type="email" id='email1'/> <br />
       <label htmlFor="" id='pa'>Password :</label>
       <input type="password" id='passwrd1'/> <br />
       <button onClick={logValidation}>Login</button>
       <Link to="/login"><button>Cancel</button></Link>

      <p>
        Don't have an account? <Link to="/registerss">Sign Up</Link>
      </p>
    </div>
    </div>
    </>
  )
}
