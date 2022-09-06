import React from "react";
import Text from "./Text";
import '../scss/style.scss'
import '../scss/card.scss'

function Card({title,tl,content,cl,children,ts,cs,classes}){
  /*tl short for title level and cl short for content level*/
    return(
        <div className={`pri ${classes}`}>
         {children}
          <div className="card">
         
          <Text level={tl} text={title} classes={`title ${ts}`}/>
          <Text level={cl} text={content} classes={`content ${cs}`}/>
       </div>
        </div>
       
    )
}

export default Card;