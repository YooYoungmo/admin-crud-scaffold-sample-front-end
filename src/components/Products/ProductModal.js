/**
 * Created by yooyoung-mo on 2017. 6. 8..
 */
import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';
import styles from './ProductModal.css';

const FormItem = Form.Item;

class ProductEditModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { Id, ProductName, ImageUrl } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>
          { children }
        </span>
        <Modal
          title="Edit User"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="Id"
            >
              {
                getFieldDecorator('Id', {
                  initialValue: Id,
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
                })(<Input />)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(ProductEditModal);
