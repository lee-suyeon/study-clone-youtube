import axios from 'axios';
import { 
  LOGIN_USER, 
  REGISTER_USER,
  AUTH_USER
} from '../_actions/types';

export function loginUser(dataToSubmit) {
  // 서버에서 받은 데이터를 변수 request에 저장
  const request = axios.post('/api/users/login', dataToSubmit)
      .then(response => response.data)
  console.log('request', request);
  // reducer로 넘겨준다. prevState + action => nextState
  return {
      type: LOGIN_USER,
      payload: request
  }
}

export function registerUser(dataToSubmit) {
  const request = axios.post('/api/users/register', dataToSubmit)
      .then(response => response.data)
  console.log('request', request);
  return {
      type: REGISTER_USER,
      payload: request
  }
}

export function auth() {
  const request = axios.get('/api/users/auth')
      .then(response => response.data)
  return {
      type: AUTH_USER,
      payload: request
  }
}

