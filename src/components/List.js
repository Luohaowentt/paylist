import React from 'react'
import Add from "./Add";
import Item from "./Item";
class List extends React.Component{
  constructor (props) {
    super(props);
    this.state={

    }
  }

  render() {
    let {payList} = this.props
    return (
      <div>
        <Add add={this.props.add}/>
        <ul>{
          payList.map((item, index) => {
            return  <Item key={index} payInfo={item}/>
        })
        }
        </ul>

      </div>
    );
  }
}

export default List
