import * as roomTypes from './roomTypes'

const initialState = {
  users: [],
  id: 1
}

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case roomTypes.SET_ROOM: {
      return { ...state, ...action.payload }
    }
    case roomTypes.SET_ROOM_USERS: {
      return { ...state, users: action.payload }
    }
    case roomTypes.ADD_ROOM_USER: {
      const users = [...state.users, action.payload]
      return { ...state, users }
    }
    default:
      return state
  }
}

export default roomReducer