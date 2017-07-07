import * as productService from '../services/products';

export default {
  namespace: 'products',
  state: {
    list: [],
    total: null,
    page: null,
    item: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
    saveItem(state, { payload: { item } }) {
      return { ...state, item };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(productService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data: data.result.items,
          total: parseInt(data.result.totalCount, 10),
          page: parseInt(page, 10),
        },
      });
    },
    *remove({ payload: id }, { call, put }) {
      yield call(productService.remove, id);
      yield put({ type: 'reload' });
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

