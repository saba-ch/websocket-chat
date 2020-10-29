import config from 'config'

import useSocket from './useSocket'

class Socket {
  static socket
  static listeners = {}

  static on = (event, cb) => {
    let listeners = Socket.listeners[event]

    if (listeners) {
      listeners.push(cb)
    } else {
      Socket.listeners[event] = [cb]
    }
  }

  static emit = (eventName, payload) => {
    Socket.socket.send(JSON.stringify({ eventName, payload }))
  }

  static disconnect = () => {
    Socket.socket?.close()
  }

  static removeListener = (event, cb) => {
    Socket.listeners[event] = Socket.listeners[event].filter(func => cb !== func)
  }

  static connect = ({ user_id, user_name, room_id = 1 }) => {
    if (Socket.socket) return
    const params = new URLSearchParams({ user_id, user_name, room_id })
    Socket.socket = new window.WebSocket(`${config.WS_URL}?${params}`)

    Socket.socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data)

      const listeners = Socket.listeners[data.eventName]
      if (listeners) {
        listeners.forEach((listener) => listener(data.payload))
      }
    }
  }
}

export { useSocket }

export default Socket
