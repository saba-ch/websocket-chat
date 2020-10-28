import { useEffect } from 'react'

import Socket from 'socket'

const useSocket = (event, action) => {
  return useEffect(
    () => {
      const cb = (payload) => action(payload)
      Socket.on(event, cb)
      return () => Socket.removeListener(event, cb)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
}

export default useSocket