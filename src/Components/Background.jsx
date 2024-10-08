import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Background(){
    let[api,setApi]=useState({product:[]})
    let[img,setImg]=useState('')
    let Navigate=useNavigate();
    useEffect(()=>{
      let api=fetch(`https://pixabay.com/api/?key=46193723-c71dd6e4249e10a2024b30b19&q=${img}&image_type=photo&pretty=true`)
      api.then(x=>x.json()).then(x=>{ 
          console.log(x);
          
      setApi({product:x.hits})
      }).catch(()=>{console.log("api is not working properly");
      })
    },[img])
  
    let view=(e)=>{
      setImg(e.target.value)
    }
       console.log(api);
    return(
        <div id="maindiv">
        <div id="bacimg">
            
            <div id="tx">
            <h1>Stress less and enjoy the best.</h1>
            <p>Over 5 million+ high quality stock images, videos and music shared by our talented community.</p>
            <span><input type="text" onChange={view} /><i className="fa-solid fa-magnifying-glass" id="ic"></i></span>
            </div>
            </div>
           <div id="ren" style={{display:"flex",flexWrap:"wrap"}}>
           {api.product.map(x=>{
            return(
                <div key={x.id}>
                
                <button onClick={()=>Navigate("/redirect",{state:{x}})}><img src={x.webformatURL} alt="image"  style={{height:"300px",width:"320px",marginRight:"20px",
                    marginBottom:"20px"
                }}/></button>
                </div>
            )
         })}
           </div>
    </div>
    )
}