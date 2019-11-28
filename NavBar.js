import React from "react";
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function NavBar(){
  return (
    
<span>
<Router>
<h1>Welcome to My React site</h1>
<ul>
<li>
<Link to ="/">Home </Link>
</li>
<li>
 <Link to ="ContactUs">ContactUs</Link>
 </li>
<li>
<Link to ="Tools">SiteTools</Link>
</li>
</ul>
<hr size='5'></hr>
<Switch>
<Route exact path="/Tools">
<Gallery/>
</Route>
<Route exact path="/">
<Home/>
</Route>
<Route exact path="/ContactUs">
<Contact/>
</Route>
</Switch>


</Router>
</span>
  );
}