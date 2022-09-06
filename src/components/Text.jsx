import React from "react";
import '../scss/style.scss'


function Text(props){
    let text = undefined;
    switch (props.level) {
        case 1:
            text = <h1 className={props.classes}>{props.text}</h1>
            break;
        case 2:
            text = <h2 className={props.classes}>{props.text}</h2>
            break;
        case 3:
            text = <h3 className={props.classes}>{props.text}</h3>
            break;
        case 4:
            text = <h4 className={props.classes}>{props.text}</h4>
            break;
        case 5:
            text = <h5 className={props.classes}>{props.text}</h5>
            break;
        case 6:
            text = <h6 className={props.classes}>{props.text}</h6>
            break;
        default:
            text = <p className={props.classes}>{props.text}</p>
            break;
    }

    return(
      text
    )
}

export default Text;