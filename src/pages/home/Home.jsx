import React, {Component} from 'react'
import DB from '../../app/db'

import {observable,action} from 'mobx';
import { observer,inject } from "mobx-react/custom"

const _data = observable({
    datas:{}
})

const _change = action((name,value)=>_data[name] = value)


@inject('store')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
    }

    request(){
      DB.TEST.test({
        year:2017,
        month:2,
      }).then(re=>{
        _change('datas',re.monthlyReport)

        this.refs.test.innerText = re.monthlyReport.year;
      })
    }

    componentDidMount(){
        this.request();
    }

    render() {
        const {datas} = _data
        return <section>
            我是首页
            <a href="javascript:;" id="request" onClick={this.request.bind(this)}>请求</a>
            请求的数据:{JSON.stringify(datas)}
            <label ref='test'></label>
        </section>
    }
}

export default Home;
