import React from 'react'
import {Row, Col} from 'antd'
import 'antd/dist/antd.css'
import Charts from './Charts'
import List from "./List";

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state={
      payList:[{
        key:'1',
        payTime: '2019-5-30',
        payMoney: '550',
        payType: 'eat',
        payContent: '生日聚会'
      },
        {
          key:'2',
          payTime: '2019-5-31',
          payMoney: '230',
          payType: 'shopping',
          payContent: '买衣服'
        }
      ]
    }
  }
  add = (payInfo) => {
    let {payList} = this.state
    payInfo.key = (payList.length + 1).toString()
    payList.push(payInfo)
    this.setState(payList)
  }

  render() {
    let {payList} = this.state
    return (
      <div>
        <div className='main'>
          <h1>Chika的记账簿</h1>
        </div>
        <Row>
          <Col span={12}>
            <Charts payList={payList}/>
          </Col>
          <Col span={12}>
            <List payList={payList} add={this.add}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App


