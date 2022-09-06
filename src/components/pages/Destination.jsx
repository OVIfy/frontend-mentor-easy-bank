import React,{useState} from "react";
import Text from "../Text";
import Selector from "../Selector";
import Card from "../Card";
import Card2 from "../Card2"
import planets from "../../planet";
import '../../scss/style.scss'
import '../../scss/animations.scss'


function Destination(){
  const [planetIndex,setPlanetIndex] = useState(0) 

  function handleChange(value){
    console.log(value)
    setPlanetIndex(value)
  }

   

    return(
        <div className="parent">
         <div className="destination-child">
          <Text text="01 PICK YOUR DESTINATION" level={1} classes="destination-heading slide-right"/>
          <div className="destination-cont">

            <div className="mx1">
               
                <img className="img pop-rot" src={planets[planetIndex].img}/>
                {/* <div className="img"></div> */}
            </div>
            <div className="mx1">
                <Selector items={['MOON','MARS','EUROPA','TITAN']} getValue={handleChange} classes="fade-slower"/>
                <Card 
                title={planets[planetIndex].name}
                content={planets[planetIndex].content}
              classes={`my3`}
                cs="min-size"/>
                <hr className="my1 destination-line"></hr>
                <div className="cards-cont fade-in">
                    <Card2 
                    title="AVG DISTANCE" 
                    content={planets[planetIndex].distance} 
                    classes=" dest-card"
                    titleStyle="min-size"
                    contentStyle="font3"
                    />
                    <Card2 
                    title="AVG DISTANCE" 
                    content={planets[planetIndex].time} 
                    classes=" dest-card"
                    titleStyle="min-size"
                    contentStyle="font3"
                    />
                </div>
               </div>
          </div>
         </div>
        </div>
    )
}

export default Destination;