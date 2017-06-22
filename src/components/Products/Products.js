import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Products.css';
import ProductModal from './ProductModal';
import { PAGE_SIZE } from '../../constants';


function Products({ dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(id) {
    dispatch({
      type: 'products/remove',
      payload: id,
    });
  }

  function editHandler(id, values) {
    dispatch({
      type: 'products/put',
      payload: { id, values },
    });
  }

  function createHandler(values) {
    dispatch({
      type: 'products/create',
      payload: values,
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/products',
      query: { page },
    }));
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'Id',
      key: 'Id',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'ProductName',
      dataIndex: 'ProductName',
      key: 'ProductName',
    },
    {
      title: 'ImageUrl',
      dataIndex: 'ImageUrl',
      key: 'ImageUrl',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
          <ProductModal record={record} onOk={editHandler.bind(null, record.Id)}>
            <a>Edit</a>
          </ProductModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.Id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <ProductModal record={{}} onOk={createHandler}>
            <Button type="primary">Create Product</Button>
          </ProductModal>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record => record.Id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.products;
  return {
    loading: state.loading.models.products,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Products);
