import * as userTypes from './userTypes'

const initialState = {
  id: '',
  name: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SET_USER: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

export default userReducer
