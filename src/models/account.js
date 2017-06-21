import { routerRedux } from 'dva/router';
import * as accountService from '../services/account';
import { setLoginIn } from '../utils';

export default {
  namespace: 'account',
  state: {
  },
  effects: {
    *login({ payload }, { call, put, select }) {
      const { data, headers } = yield call(accountService.query, payload);
      if (data && data.success) {
        yield setLoginIn(data.result.userName, data.result.token);

        const nextLocation = yield select(state => state.routing.locationBeforeTransitions);
        yield put(routerRedux.push({
          pathname: nextLocation.state.nextPathname,
          search: nextLocation.state.nextSearch,
        }));
      }
    },
  },
};

