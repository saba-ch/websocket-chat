import React, { createContext } from 'react'
// import { useDispatch } from 'react-redux'

import config from 'config'

const WebSocketContext = createContext(null)

export { WebSocketContext }

// const eventTypes = {
//   userJoined: 'userJoined',
//   userLeft: 'userLeft',
//   roomInfo: 'roomInfo',
//   newMessage: 'newMessage',
// }

const WebSocket = ({ children }) => {
  let socket

  // const dispatch = useDispatch()

  const connect = ({ user_id, user_name, room_id = 1 }) => {
    if (socket) return
    const params = new URLSearchParams({ user_id, user_name, room_id })
    socket = new window.WebSocket(`${config.WS_URL}?${params}`)
    
    socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data)
      console.log("socket.onmessage -> data", data)
    }
  }

  return (
    <WebSocketContext.Provider value={{ connect }}>
      {children}
    </WebSocketContext.Provider>
  )
}

export default WebSocket
