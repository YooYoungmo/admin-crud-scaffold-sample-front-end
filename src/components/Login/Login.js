import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import LoginForm from './LoginForm';


function Login({ dispatch, loading }) {
  function loginHandler(values) {
    console.log('loginHandler');
    console.log(values);
    dispatch({ type: 'account/fetch', payload: values });
  }

  return (
    <div className={styles.normal}>
      <LoginForm onOk={loginHandler} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.account,
  };
}

export default connect(mapStateToProps)(Login);
