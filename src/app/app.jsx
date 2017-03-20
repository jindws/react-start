"use strict";
//基本组件
import React, {Component} from 'react'
import {render} from 'react-dom'

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../pages/home'
import About from '../pages/about'

import DB from './db'


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

render(<BasicExample/>, document.getElementById('app'));
