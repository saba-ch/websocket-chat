import config from 'config'

class WebSocket {
  static socket
  static listeners = {}

  static on = (event, cb) => {
    let listeners = WebSocket.listeners[event]

    if (listeners) {
      listeners.push(cb)
    } else {
      WebSocket.listeners[event] = [cb]
    }
  }

  static emit = (eventName, payload, cb) => {
    WebSocket.socket.send(JSON.stringify({ eventName, payload }))
    cb()
  }

  static disconnect = () => {
    WebSocket.socket.close()
  }

  static removeListener = (event, cb) => {
    WebSocket.listeners[event] = WebSocket.listeners[event].filter(func => cb !== func)
  }

  static connect = ({ user_id, user_name, room_id = 1 }) => {
    if (WebSocket.socket) return
    const params = new URLSearchParams({ user_id, user_name, room_id })
    WebSocket.socket = new window.WebSocket(`${config.WS_URL}?${params}`)

    WebSocket.socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data)

      const listeners = WebSocket.listeners[data.eventName]
      if (listeners) {
        listeners.forEach((listener) => listener(data.payload))
      }
    }
  }
  

}

export default WebSocket
