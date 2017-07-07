import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class ProductForm extends Component {
  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Id, ProductName, ImageUrl } =
      this.props.dataSource.data ? this.props.dataSource.data : {};
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };

    return (
      <Form onSubmit={this.okHandler}>
        <FormItem
          {...formItemLayout}
          label="Id"
        >
          {
            getFieldDecorator('Id', {
              initialValue: Id,
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input />)
          }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="ProductName"
        >
          {
            getFieldDecorator('ProductName', {
              initialValue: ProductName,
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input />)
          }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="ImageUrl"
        >
          {
            getFieldDecorator('ImageUrl', {
              initialValue: ImageUrl,
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input />)
          }
        </FormItem>

        <FormItem wrapperCol={{ span: 8, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(ProductForm);
