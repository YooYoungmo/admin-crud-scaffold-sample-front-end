/**
 * Created by yooyoung-mo on 2017. 6. 8..
 */
import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/products">
        <Link to="/products"><Icon type="bars" />Products</Link>
      </Menu.Item>
      <Menu.Item key="/shops">
        <Link to="/products"><Icon type="bars" />Products</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
