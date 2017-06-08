import * as productService from '../services/products';

export default {
  namespace: 'products',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(productService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: 10,
          page: parseInt(page, 10),
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/products') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
