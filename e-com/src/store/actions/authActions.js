import axios from 'axios';
import jwt from 'jsonwebtoken';
import actiontypes from '../reducers/actiontypes';
import { getUsers } from './usersActions';

const apiCall = (url, data, dispatch) => {
  axios.post(url, data)
  .then(res => {
    dispatch(checkAdmin(res.data.accessToken))
  })
  .catch(err => {
    dispatch(failure(err.message))
  })
}

export const addUser = (user) => {
  return dispatch => {
    dispatch(loading())
    axios.post('http://localhost:9999/api/users', user)
    .then(() => {
      dispatch(getUsers())
    })
    .catch(err => dispatch(failure(err.message)))
  }
}

export const login = user => {
  return dispatch => {
    dispatch(loading())
    apiCall('http://localhost:9999/api/login', user, dispatch)
  }
}

export const register = (user) => {
  return dispatch => {
    dispatch(loading())
    apiCall('http://localhost:9999/api/register', user, dispatch)
  }
}

export const logout = () => {
  return {
    type: actiontypes().auth.logout
  }
}

export const checkAdmin = token => {
  return dispatch => {
    localStorage.setItem('token', token)
    const id = jwt.decode(token).sub;
    axios.get(`http://localhost:9999/api/users/${id}`)
    .then(res => {
      dispatch(success({token, admin: res.data.admin}))
    })
  }
}

export const loading = () => {
  return {
    type: actiontypes().auth.loading
  }
}

export const success = ({token, admin}) => {
  return {
    type: actiontypes().auth.success,
    payload: {token, admin}
  }
}

export const failure = error => {
  return {
    type: actiontypes().auth.failure,
    payload: error
  }
}

export const checkUser = () => {
  return dispatch => {
    let token = localStorage.getItem('token')
    if(token) {      
      if(jwt.decode(token).exp < Date.now()) {
        dispatch(checkAdmin(token))
      }
      else {
        localStorage.removeItem('token')
      }
    }
  }
}