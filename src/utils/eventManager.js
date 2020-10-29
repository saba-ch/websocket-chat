import eventEmmiter from './eventEmitter'

class EventManager {
  showNotificationSuccess(message) {
    eventEmmiter.emit('notification', { success: true, message })
  }

  showNotificationFail(message) {
    eventEmmiter.emit('notification', { success: false, message })
  }

  addListener(eventType, listener) {
    eventEmmiter.addListener(eventType, listener)
  }
}

export default new EventManager()
