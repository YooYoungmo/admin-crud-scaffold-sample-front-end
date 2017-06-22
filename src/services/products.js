import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page = 1 }) {
  let skipCount = 0;
  if (page > 1) {
    skipCount = (page - 1) * PAGE_SIZE;
  }

  return request('/api/products?maxResultCount=' + PAGE_SIZE + '&skipCount=' + skipCount, {
    method: 'GET',
  });
}

export function remove(id) {
  return request(`/api/products/${id}`, {
    method: 'DELETE',
  });
}

export function put(id, values) {
  return request(`/api/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/products', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
