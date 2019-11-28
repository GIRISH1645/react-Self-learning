import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Home () {
  return (
    <div>
    <Router>
    <h1>Choose your series</h1>
    <ul>
    <li>
    <Link to ="/BBT">Big Bang Theory</Link>
    </li>
    <li>
    <Link to ="/HIYM">How i met your Mother</Link>
    </li>
    </ul>
    </Router>
    </div>
  )
}