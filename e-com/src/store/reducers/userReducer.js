import actiontypes from '../actiontypes';

const initState = {
  user: null,
  loading: false,
  error: undefined
}

const userReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().user.loading:
      return {
        ...state,
        loading: true
      }

    case actiontypes().user.success:
      return {
        ...state,
        loading: false,
        user: action.payload
      }

    case actiontypes().user.failure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;