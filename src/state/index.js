import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import conversationReducer from './conversation/conversationReducer'
import roomReducer from './room/roomReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  conversation: conversationReducer,
  room: roomReducer,
  user: userReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
