"use strict";
//基本组件
import React, {Component} from 'react'
import {render} from 'react-dom'

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../pages/home'
import About from '../pages/about'

import {observable,action} from 'mobx';
import {observer, Provider} from "mobx-react/custom"
import DB from './db'

class Store{
    @observable title

    @action _change = (name,value)=>{
        this[name] = value
    }
}

const nstore = new Store()

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



render(<Provider store={nstore}>
    <BasicExample/>
</Provider>, document.getElementById('app'));
