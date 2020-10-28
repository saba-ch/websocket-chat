import React from 'react'
import { useDispatch } from 'react-redux'

import * as socketManager from 'socket/socketManager'
import * as socketEvents from 'socket/socketEvents'

import useSocket from 'socket/useSocket'

const Room = () => {
  const dispatch = useDispatch()

  useSocket(socketEvents.roomInfo, socketManager.onRoomInfo(dispatch))
  useSocket(socketEvents.userJoined, socketManager.onUserJoined(dispatch))
  useSocket(socketEvents.userLeft, socketManager.onUserLeft(dispatch))

  return (
    <div>
      Room
    </div>
  )
}

export default Room
