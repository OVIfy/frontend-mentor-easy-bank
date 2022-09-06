import React from "react";
import Card from "../Card";
import Circle from "../Circle";
import Text from "../Text";


import '../../scss/style.scss'

function Home(){

    return(
      <div className="parent">
        <div className="home-child mx3">
         <Card title="SPACE" 
            classes={'my1'}
            content="Let’s face it; if you want to go to space, you might as well genuinely go to 
             outer space and not hover kind of on the edge of it. Well sit back, and relax 
             because we’ll give you a truly out of this world experience!"
             cs='min-size'>
              <Text text="SO, YOU WANT TO TRAVEL TO SPACE" classes="font3 my2 slide-down"/>
         </Card>
         <Circle text="EXPLORE" classes={'mg2x3 bounce'}/>
       </div>
      </div>
    )
}

export default Home;