import React, {Component} from 'react'
import './about.scss'

import {observable,action} from 'mobx';
import { observer,inject } from "mobx-react/custom"


const _data = observable({
    name:'hongyuanzhang'
})

const _change = action((name,value)=>_data[name] = value)

@inject('store')
@observer
class About extends Component {
  constructor(){
    super();
  }
  time(){
    _change('name','')
  }
  render(){
      const {name} = _data
    return <section id='about'>
        我是{name}
        <a onClick={this.time.bind(this)}>clear</a>
        <input type="text" onChange={e=>{
            _change('name',e.target.value)
        }} value={name}/>
    </section>
  }
}


export default About;
