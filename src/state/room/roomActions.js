import * as roomTypes from './roomTypes'

const setRoom = (payload) => ({
  type: roomTypes.SET_ROOM,
  payload
})

const setRoomUsers = (payload) => ({
  type: roomTypes.SET_ROOM_USERS,
  payload
})

const addRoomUser = (payload) => ({
  type: roomTypes.ADD_ROOM_USER,
  payload
})

const removeRoomUser = (payload) => ({
  type: roomTypes.REMOVE_ROOM_USER,
  payload
})

export default {
  setRoom,
  setRoomUsers,
  addRoomUser,
  removeRoomUser
}