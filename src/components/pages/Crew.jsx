import React,{useState,useEffect} from "react";
import Text from "../Text";
import Selector from "../Selector";
import Card from "../Card";
import Card2 from "../Card2"
import Progress from "../Progress";
import crew from "../../crew";

import '../../scss/style.scss'
import '../../scss/animations.scss'

function Crew(){

    const [crewIndex,setCrewIndex] = useState(0)

    function handleChange(value){
      setCrewIndex(value)
    }
    
    useEffect(()=>{
      console.log('yeah')
    },[crewIndex])
    

    return(
     <div className="crew-parent">
        <div className="crew-child">
         <Text text="02 MEET YOUR CREW" level={1} classes={`destination-heading mx1 mx1 slide-down`}/>
        
         <Card2 
                title={crew[crewIndex].name}
                content={crew[crewIndex].bio}
                classes="crew-bio mx1 my2 slide-up"
                titleStyle="mid-size font2"
                contentStyle="min-size">
           <Text text={crew[crewIndex].rank} classes="font3 min-size slide-up"/>
         </Card2>

        <img  src={crew[crewIndex].img} className="crew-img jiggle"/>
        <Progress classes="mx1 my2 slide-right" items={[1,2,3,4]} getValue={handleChange}/>
            
        </div>
     </div>
   
)
}

export default Crew;