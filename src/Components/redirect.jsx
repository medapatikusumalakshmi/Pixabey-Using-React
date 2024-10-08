import React from "react";
import { useLocation } from "react-router-dom";
function Redirect(){
    let Location=useLocation()
    console.log(Location);
    let specificImg=Location.state.x
    return(
       <>
       <div id="unqmain">
       <img src={specificImg.webformatURL} alt="image" id="uniqimg"/>
       </div>
       </>
    )
    
}
export default Redirect