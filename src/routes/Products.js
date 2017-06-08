import React from 'react';
import { connect } from 'dva';
import styles from './Products.css';
import ProductComponent from '../components/Products/Products';

function Products() {
  return (
    <div className={styles.normal}>
      <ProductComponent />
    </div>
  );
}

export default connect()(Products);
