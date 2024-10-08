import React from "react";
import { Link } from "react-router-dom";
let Reg=()=>{
  let Validation=()=>{
    let ele=document.getElementById("Railin")
    window.localStorage.setItem("name",ele.value)
    let ele1=document.getElementById("Railinpas")
    window.localStorage.setItem("password",ele1.value)
  } 
    return(
        <>
                   <h1>Registration Form</h1>
                   <div className="card1">
                        <div  className="subcard1">
                        <form>
                      <input type="email" placeholder="EMAIL" className="Rinput"  id="Railin"/>
                          
                       <input type="password" placeholder="PASSWORD" className="Rinput" id="Railinpas"/>
                       <input type="password" placeholder="CONFORM PASSWORD" className="Rinput"/>
          
                        <Link to="/home">
                           <button type="submit" class="Rbtn" style={{marginTop:"10px",width:"250px"}} onClick={Validation}>Submit</button>
                        </Link> 
                           <Link to="/login">
                             <button type="submit" class="Rbtn" style={{marginTop:"10px",width:"250px"}}>cancel</button>
                                   </Link> 
                                     </form>
                           </div>
                        </div>
        </>
    )
}
export default Reg