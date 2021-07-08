import actiontypes from '../actiontypes';
import jwt from 'jsonwebtoken';


const initState = {
  userId: null,
  userToken: null,
  userEmail: null,
  loading: false,
  error: undefined,
  admin: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().auth.loading:
      return {
        ...state,
        loading: true
      }

    case actiontypes().auth.success:
      // const email = jwt.decode(action.payload.token).email;
      // const id = jwt.decode(action.payload.token).sub;
      // const admin = jwt.decode(action.payload.token).admin;    såhär skulle jag ha gjort
      return {
        ...state,
        userId: jwt.decode(action.payload.token).sub,
        userToken: action.payload.token,
        userEmail: jwt.decode(action.payload.token).email,
        admin: action.payload.admin,
        loading: false,
        error: undefined
      }

    case actiontypes().auth.failure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case actiontypes().auth.logout:
      localStorage.removeItem('token')
      return {
        ...initState
      }

    default:
      return state
  }
}

export default authReducer;