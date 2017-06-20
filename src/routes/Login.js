import React from 'react';
import { connect } from 'dva';
import LoginForm from '../components/Login/LoginForm';
import styles from './Login.css';


function Login({ location }) {
  return (
    <div className={styles.normal}>
      <LoginForm />
    </div>
  );
}

export default connect()(Login);
