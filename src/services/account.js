/**
 * Created by yooyoung-mo on 2017. 6. 8..
 */
import request from '../utils/request';

export function query(values) {
  let data = {
    tenantName: 'Default',
    usernameOrEmailAddress: values.username,
    password: values.password,
  };

  return request('/account', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });
}
