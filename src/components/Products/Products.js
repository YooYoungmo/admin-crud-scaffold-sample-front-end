import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm } from 'antd';
import styles from './Products.css';
import { PAGE_SIZE } from '../../constants';


function Products({ list: dataSource, total, page: current }) {
  function deleteHandler(id) {
    console.warn(`TODO: ${id}`);
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
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.products;
  return {
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Products);
