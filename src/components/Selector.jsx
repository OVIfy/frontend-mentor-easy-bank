import React,{useState,useEffect} from "react";
import '../scss/style.scss'
import '../scss/selector.scss'

function Selector({items,getValue,classes}){
    const [selected, setSelected] = useState(0)

    function handleSelection({target}){
       setSelected(target.value)
    }

    function passValue(value){
      console.log('function pass value => ' + value)
      getValue && getValue(value)
    } 
    
    useEffect(()=>{
      passValue(selected)
    })

    return(
       <ul className={`selector ${classes}`}>
        {items.map((element,i)=>{
           return <li onClick={handleSelection} value={i} key={i} className={`item ${i === selected && 'selected'}`}>{element}</li>
        })}
         {/* <li className="item">MOON</li>
         <li className="item">MARS</li>
         <li className="item">EUROPA</li>
         <li className="item">TITAN</li> */}
       </ul>
    )
}

export default Selector;