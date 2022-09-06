import React from "react";
import '../scss/style.scss'
import '../scss/background.scss'

function Background(props){

    return(
       <div className="full-screen" style={{background:`no-repeat center center/cover url('${props.path}')`}}>
          {props.children}
       </div>
    )
}

export default Background;