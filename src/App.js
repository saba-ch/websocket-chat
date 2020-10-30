import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Socket, { useSocket } from 'socket'
import * as socketEvents from 'socket/socketEvents'
import * as socketManager from 'socket/socketManager'

import Router from 'Router'

import ErrorBoundary from 'components/ErrorBoundry'

const App = () => {
  const dispatch = useDispatch()

  useSocket(socketEvents.roomInfo, socketManager.onRoomInfo(dispatch))
  
  useEffect(() => {
    return () => Socket.disconnect()
  }, [])
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  )
}

export default App
