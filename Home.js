import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function Home () {
  return (
    <div>
    <Router>
    <h1>Choose your Brand</h1>
    <ul>
    <li>
    <img width="40px" src ='https://cdn.vox-cdn.com/thumbor/i0QRq2jqVQkf1letumqfMza-fqM=/0x0:604x399/1200x800/filters:focal(254x152:350x248)/cdn.vox-cdn.com/uploads/chorus_image/image/56635215/Screen_Shot_2017_09_12_at_10.50.12_AM.1505226330.png'/>
    <Link to ="/Apple">Apple</Link>
    </li>
    <li>
    <img width="40px" src ='https://i.pinimg.com/originals/f1/37/c8/f137c8e169d6a1ac74198400eeb949e0.jpg'/>
    <Link to ="/OnePlus">OnePlus</Link>
    </li>
     <li>
     <img width="40px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/1024px-Xiaomi_logo.svg.png'/>
    <Link to ="/Redmi">Redmi</Link>
    </li>
     <li>
     <img width="40px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png' />
    <Link to ="/Samsung">Samsung</Link>
    </li>
    </ul>
    <Switch>
    <Route path="/:id" children ={<Child/>}>
    </Route>
    </Switch>
    </Router>
    </div>
  )
}

function Child (){
  let {id} = useParams();
  return(
<div>
<h3>You Choosed: {id}</h3>
</div>
  )
}