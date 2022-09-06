import React,{useState} from 'react';

import NavBar from './components/NavBar';
import Background from './components/Background';
import Home from './components/pages/Home';
import Destination from './components/pages/Destination';
import Crew from './components/pages/Crew';
import Technology from './components/pages/Technology';


import './scss/style.scss'
import './scss/_atoms.scss'




function App() {
  const [state,setState] = useState('0')
  function passState(value){
    setState(value)
  }

  return (
    <Background path={state == "0" && `/images/home/background-home-desktop.jpg` ||
                      state == "1" && `/images/destination/background-destination-desktop.jpg` ||
                      state == "2" && `/images/crew/background-crew-desktop.jpg` ||
                      state == "3" && `/images/technology/background-technology-desktop.jpg`
                     }>
      <NavBar classes="my2" items={['00 HOME','01 DESTINATION','02 CREW' , '03 TECHNOLOGY']} getstate={passState}/>
      {state == "0" &&  <Home/>}
      {state == "1" && <Destination/>}
      {state == "2" && <Crew/>}
      {state == "3" && <Technology/>}
    </Background>
  );
}

export default App;
