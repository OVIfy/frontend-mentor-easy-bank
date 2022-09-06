import React,{useState,useEffect} from "react";
import Circle from "./Circle";
import '../scss/style.scss'
import '../scss/progress2.scss'

function Progress2({classes,items,getValue,itemStyle}){

    const [selected,setSelected] = useState(0)
      
    function handleSelection({target : {innerHTML,value}}){
      setSelected(innerHTML)
      console.log("pro2 " + value)
    }
    
    useEffect(()=>{
        passValue()
    })


    function passValue(){
      getValue && getValue(selected)
    }

    return(
        <ul className={`progress2-cont ${classes}`}>
            {items.map((element,i)=>{
                return <li onClick={handleSelection} key={i} value={i} className={`progress2-item ${i == selected && 'selected'} ${itemStyle}`}>{i}</li>
            })}
           {/* <div  className="progress-item"></div>
           <div className="progress-item"></div>
           <div className="progress-item"></div>
           <div className="progress-item"></div> */}
        </ul>
    )
}

export default Progress2;