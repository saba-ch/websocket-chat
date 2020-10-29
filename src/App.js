import React, { useEffect } from 'react'

import Router from 'Router'
import Socket from 'socket'

const App = () => {
  useEffect(() => {
    return () => Socket.disconnect()
  }, [])
  return <Router />
}

export default App
