import React from 'react'
import { Form, Input, DatePicker ,Select, Button} from 'antd';
// const { MonthPicker, RangePicker, WeekPicker } = DatePicker
const { Option } = Select;
const { TextArea } = Input;

class AddForm extends React.Component{
  constructor (props) {
    super(props);
    this.state={

    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const payInfo = {
          payTime:values['payTime'].format('YYYY-MM-DD'),
          payMoney:values.payMoney,
          payType:values.payType,
          payContent:values.payContent
        }
        this.props.add(payInfo)
        console.log(payInfo);
        this.props.form.resetFields();
      }
    })

  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" layout='inline'>
        <Form.Item >
          {getFieldDecorator('payTime',config)(<DatePicker placeholder="消费时间"/>)}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('payMoney')(<Input placeholder="消费金额"/>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('payType')(
            <Select  placeholder="消费类型" style={{ width: 120 }} >
              <Option value="eat">饮食</Option>
              <Option value="shopping">购物</Option>
              <Option value="travel" >旅行</Option>
              <Option value="game">游戏娱乐</Option>
              <Option value="else">其他</Option>
            </Select>
          )}
        </Form.Item>
        <br/>
        <Form.Item >
        {getFieldDecorator('payContent')(
          <TextArea  placeholder="消费内容" rows={2} style={{ width: 400}}/>
        )}<br/>
          <Button type="primary" htmlType="submit" className="login-form-button">
            添加
          </Button>
      </Form.Item>

      </Form>
    )
  }
}
const Add = Form.create({ name: 'normal_login' })(AddForm);

export default Add
