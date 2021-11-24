import request from '../utils/request';
import config from '../utils/config'

const {baseUrl}= config
export function query(value) {
  return request(`${baseUrl}/find`,{
    method:'GET',
    data:JSON.stringify({
      value:value
    })
  });
}
