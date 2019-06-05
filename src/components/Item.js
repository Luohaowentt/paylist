import React from 'react'
class Item extends React.Component{
  constructor (props) {
    super(props);
    this.state={

    }
  }

  render() {
    let {payInfo} = this.props
    return (
      <div>
        <p>
          {payInfo.payTime}          {payInfo.payMoney}          {payInfo.payType}          {payInfo.payContent}
        </p>
      </div>
    );
  }
}

export default Item
