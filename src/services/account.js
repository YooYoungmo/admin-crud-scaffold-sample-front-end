/**
 * Created by yooyoung-mo on 2017. 6. 8..
 */
import request from '../utils/request';

export function query(values) {

  // let data = {
  //   tenantName: 'Default',
  //   usernameOrEmailAddress: 'admin',
  //   password: '123qwe',
  // };

  let data = '{' +
    '"tenantName": "Default",' +
    '"usernameOrEmailAddress": "admin",' +
    // '"password": "123qwe"' +
    '"password": "123qwew"' +
    '}';
  return request('/account', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: data,
  });
}
