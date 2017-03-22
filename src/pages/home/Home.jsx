import React, {Component} from 'react'
import DB from '../../app/db'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
          datas:{}
        }
    }

    request(){
      DB.TEST.test({
        year:2017,
        month:2,
      }).then(re=>{
        this.setState({
          // datas:re.monthlyReport
        })
        this.refs.test.innerText = re.monthlyReport.year;
      })
    }

    componentDidMount(){
        this.request();
    }

    render() {
      // console.log(this.state.datas)
        return <section>
            我是首页
            <a href="javascript:;" id="request" onClick={this.request.bind(this)}>请求</a>
            请求的数据:{JSON.stringify(this.state.datas)}
            <label ref='test'></label>
        </section>
    }
}

export default Home;
