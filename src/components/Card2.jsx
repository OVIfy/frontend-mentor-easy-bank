import React from "react";
import Text from "./Text";
import '../scss/style.scss'
import '../scss/card.scss'

function Card2({title,tl,content,cl,children,titleStyle,contentStyle,classes}){
  /*tl short for title level and cl short for content level*/
    return(
        <div className={`pri ${classes}`}>
         {children}
          <div>
         
          <Text level={tl} text={title} classes={`${titleStyle}`}/>
          <Text level={cl} text={content} classes={`${contentStyle}`}/>
       </div>
        </div>
       
    )
}

export default Card2;