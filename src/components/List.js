import React from 'react'
import Add from "./Add";
import { Table } from 'antd'
class List extends React.Component{
  constructor (props) {
    super(props);
    this.state={

    }
  }

  render() {
    let {payList} = this.props
    const columns = [
      {
        title: '消费时间',
        dataIndex: 'payTime',
        key: 'payTime',
      },
      {
        title: '消费金额',
        dataIndex: 'payMoney',
        key: 'payMoney',
      },
      {
        title: '消费类型',
        dataIndex: 'payType',
        key: 'payType',
      },
      {
        title: '详情',
        key: 'payContent',
        dataIndex: 'payContent',
      },
      {
        title: '操作',
        key: 'action',
        render: () => (
          <a href='javascript:;'>Delete</a>
        ),
      },
    ];
    return (
      <div>
        <Add add={this.props.add}/>
        <Table columns={columns} dataSource={payList} />
      </div>
    );
  }
}

export default List
