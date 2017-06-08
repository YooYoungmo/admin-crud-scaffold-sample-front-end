/**
 * Created by yooyoung-mo on 2017. 6. 8..
 */
import request from '../utils/request';

export function fetch({ page = 1 }) {
  return request('/api/products');
}

export function remove(id) {
  return request(`/api/products/${id}`, {
    method: 'DELETE',
  });
}
