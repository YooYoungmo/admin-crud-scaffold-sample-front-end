import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import LoginForm from './LoginForm';
import styles from './LoginForm.less';

function Login({ dispatch, loading = false }) {
  const loginProps = {
    loading,
    onOk(data) {
      dispatch({ type: 'account/login', payload: data });
    },
  };
  return (
    <div className={styles.spin}><Spin tip='加载用户信息...' spinning={loading} size='large'><LoginForm {...loginProps} /></Spin></div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
}

function mapStateToProps({ loading }) {
  return { loading: loading.models.account };
}

export default connect(mapStateToProps)(Login);
