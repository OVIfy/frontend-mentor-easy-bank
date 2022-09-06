import React from "react";
import '../scss/style.scss'
import '../scss/circle.scss'

function Circle({text,classes}){

    return(
       <div className={`circle ${classes}`}>
         {text}
       </div>
    )
}

export default Circle;