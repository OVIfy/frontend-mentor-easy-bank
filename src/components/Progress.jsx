import React,{useState,useEffect} from "react";
import Circle from "./Circle";
import '../scss/style.scss'
import '../scss/progress.scss'

function Progress({classes,items,getValue}){

    const [selected,setSelected] = useState(0)
      
    function handleSelection({target : {innerHTML}}){
      setSelected(innerHTML)
      
    }
    
    useEffect(()=>{
        passValue()
    })


    function passValue(){
      getValue && getValue(selected)
    }

    return(
        <div className={`progress-cont ${classes}`}>
            {items.map((element,i)=>{
                return <div onClick={handleSelection} key={i} value={i} className={`progress-item ${i == selected && 'selected'}`}>{i}</div>
            })}
           {/* <div  className="progress-item"></div>
           <div className="progress-item"></div>
           <div className="progress-item"></div>
           <div className="progress-item"></div> */}
        </div>
    )
}

export default Progress;