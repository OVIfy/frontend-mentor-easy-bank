import React,{useState} from "react";
import Progress2 from "../Progress2";
import Card2 from "../Card2";
import Text from "../Text";

import tech from "../../technology";
import '../../scss/style.scss'
import '../../scss/animations.scss'

function Technology(){
    const [index,setIndex] = useState(0)

    function getValue(value){
        setIndex(value)
    }

    return(
        <div className="tech-parent">
          <div className="tech-child">
            <Text text="03 SPACE LAUNCH 101" level={1} classes="destination-heading mx1"/>
            <img className="tech-img slide-down"  src={tech[index].desk_img}/>
          
            <div className="terminology-cont crew-bio">
                <Progress2 items={[1,2,3]} classes=" slide-up" itemStyle='my1' getValue={getValue}/>
                <Card2 
                    title={tech[index].title}
                    content={tech[index].content}
                    classes=" mx3 slide-down"
                    titleStyle="mid-size font2"
                    contentStyle="min-size">
                 <Text text="THE TERMINOLOGY..." classes="font5 min-size my1 slide-right"/>
                </Card2>
            </div>
            
           
          </div>
        </div>
    )
}

export default Technology;