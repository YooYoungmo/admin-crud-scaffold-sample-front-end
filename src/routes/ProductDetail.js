import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import ProductForm from '../components/Products/ProductForm';
import styles from './ProductDetail.css';


const ProductDetail = ({ productDetail, location, dispatch }) => {
  const { data, createFlag } = productDetail;
  function editHandler(id, values) {
    dispatch({
      type: 'productDetail/put',
      payload: { id, values },
    });
  }
  function createHandler(values) {
    dispatch({
      type: 'productDetail/create',
      payload: { values },
    });
  }
  if (createFlag === true) {
    return (
      <MainLayout location={location}>
        <div className={styles.normal}>
          <ProductForm dataSource={{ }} onOk={createHandler} />
        </div>
      </MainLayout>
    );
  } else {
    return (
      <MainLayout location={location}>
        <div className={styles.normal}>
          <ProductForm dataSource={{ data }} onOk={editHandler.bind(null, data.Id)} />
        </div>
      </MainLayout>
    );
  }
};

ProductDetail.propTypes = {
  detail: PropTypes.object,
  loading: PropTypes.bool,
  location: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect(({ productDetail, loading }) =>
  ({ productDetail, loading: loading.models.productDetail }))(ProductDetail);
