import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item
import './index.css'
class Login extends React.Component {
  componentDidMount(){
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.LoginHand(values)
      }
    });
  }
  render () {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 16 },
    }
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    return (
      <div className="login-main">
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout}
          >
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input className="login-username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem {...formItemLayout}
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem {...formItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
             
            >
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
Login = Form.create()(Login)
export default Login
// export default Login