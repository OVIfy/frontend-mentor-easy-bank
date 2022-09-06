import React,{useState,useEffect} from "react";
import '../scss/style.scss'
import '../scss/nav-bar.scss'

function NavBar({classes,items,getstate,navStyle}){

    const [clickedItem,setClickedItem] = useState(0)

    const HandleSelection = (e) => {
      const {target} = e
      setClickedItem(target.value)
    
    }
    
    useEffect(()=>{
      getstate && getstate(clickedItem)
    })
    

    return(
       <nav className={classes}>
        <div className="nav">
          <hr className="nav-line"></hr>
          <ul className="nav-items">

             {items? items.map((element,i) => {
               return <li key={i} value={i} onClick={HandleSelection} className={`nav-item ${clickedItem == i? 'selected' : null} ${navStyle}`}>{element}</li>
             }) : 
             (<>
               <li className="nav-item slected">00 HOME</li>
              </>
             )}
      
          </ul>
        </div>
       </nav>
    )
}

export default NavBar;