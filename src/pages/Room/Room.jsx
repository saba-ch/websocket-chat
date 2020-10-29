import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as socketManager from 'socket/socketManager'
import * as socketEvents from 'socket/socketEvents'
import useSocket from 'socket/useSocket'
import * as conversationSelectors from 'state/conversation/conversationSelectors'

import UserInfo from 'components/UserInfo'

import Conversations from './Conversations'
import NoConversation from './NoConversation'
import Chat from './Chat'

import {
  StyledContainer,
  StyledSubContainer
} from './RoomStyles'

const Room = () => {
  const dispatch = useDispatch()
  const conversationId = useSelector(conversationSelectors.currentConversationIdSelector)

  useSocket(socketEvents.roomInfo, socketManager.onRoomInfo(dispatch))
  useSocket(socketEvents.userJoined, socketManager.onUserJoined(dispatch))
  useSocket(socketEvents.userLeft, socketManager.onUserLeft(dispatch))

  return (
    <StyledContainer>
      <UserInfo />
      <StyledSubContainer>
        <Conversations />
        {conversationId && <Chat conversationId={conversationId} />}
        {!conversationId && <NoConversation />}
      </StyledSubContainer>
    </StyledContainer>
  )
}

export default Room
