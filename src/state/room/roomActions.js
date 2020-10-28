import * as roomTypes from './roomTypes'

export const setRoom = (payload) => ({
  type: roomTypes.SET_ROOM,
  payload
})

export const setRoomUsers = (payload) => ({
  type: roomTypes.SET_ROOM_USERS,
  payload
})

export const addRoomUser = (payload) => ({
  type: roomTypes.ADD_ROOM_USER,
  payload
})
