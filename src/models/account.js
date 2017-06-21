import * as accountService from '../services/account';

export default {
  namespace: 'account',
  state: {
  },
  // reducers: {
  //   save(state, { payload: { data: list, total, page } }) {
  //     return { ...state, list, total, page };
  //   },
  // },
  effects: {
    *login({ payload: { page = 1 } }, { call, put }) {
      console.log('account model');
      const { data, headers } = yield call(accountService.query, { page });
      console.log(data);
      // yield put({
      //   type: 'save',
      //   payload: {
      //     data,
      //     total: 10,
      //     page: parseInt(page, 10),
      //   },
      // });
    },
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname, query }) => {
  //       if (pathname === '/login') {
  //         dispatch({ type: 'fetch', payload: query });
  //       }
  //     });
  //   },
  // },
};

