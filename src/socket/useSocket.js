import { useCallback, useEffect } from 'react'

import Socket from 'socket'

const useSocket = (event, action) => {
  const send = useCallback((payload, cb) => {
    Socket.emit(event, payload)
    cb()
  }, [event])

  useEffect(() => {
    if (!action) return

    const cb = (payload) => action(payload)
    Socket.on(event, cb)

    return () => Socket.removeListener(event, cb)
  }, [event, action])

  return {
    send
  }
}

export default useSocket