import React from 'react';
import { connect } from 'dva';
import styles from './Products.css';
import ProductComponent from '../components/Products/Products';
import MainLayout from '../components/MainLayout/MainLayout';

function Products({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ProductComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(Products);
