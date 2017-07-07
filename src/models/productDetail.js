import { routerRedux } from 'dva/router';
import * as productService from '../services/products';

export default {
  namespace: 'productDetail',
  state: {
    data: {},
    createFlag: true,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/products/edit') {
          dispatch({ type: 'query', payload: query.id });
        } else {
          dispatch({ type: 'load' });
        }
      });
    },
  },

  reducers: {
    save(state, { payload: { data, createFlag } }) {
      return { ...state, data, createFlag };
    },
  },
  effects: {
    *query({payload: id}, {call, put}) {
      const { data } = yield call(productService.fetchById, id);
      yield put({
        type: 'save',
        payload: {
          data: data.result,
          createFlag: false,
        },
      });
    },
    *load({ payload }, { put }) {
      yield put({
        type: 'save',
        payload: {
          data: null,
          createFlag: true,
        },
      });
    },
    *put({ payload: { id, values } }, { call, put }) {
      yield call(productService.put, id, values);
      yield put(routerRedux.push('/products'));
    },
    *create({ payload: values }, { call, put }) {
      yield call(productService.create, values);
      yield put(routerRedux.push('/products'));
    },
  },
};

