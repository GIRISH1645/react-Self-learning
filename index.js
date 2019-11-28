import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import NavBar from './NavBar';
import Telecast from './Telecast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Telecast/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
