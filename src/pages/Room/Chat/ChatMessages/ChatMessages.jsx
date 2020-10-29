import React, { useEffect, useRef } from 'react'
import { ListItem } from '@material-ui/core'
import { useSelector } from 'react-redux'

import * as conversationSelectors from 'state/conversation/conversationSelectors'
import * as userSelectors from 'state/user/userSelectors'

import Message from 'components/Message'

import { StyledList } from './ChatMessagesStyles'

const ChatMessages = () => {
  const listRef = useRef()
  const messages = useSelector(conversationSelectors.currentConversationMessagesSelector)
  const user = useSelector(userSelectors.userSelector)

  useEffect(() => {
    if (listRef.current) listRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <StyledList>
      {messages.map((msg) => (
        <ListItem key={msg.id}>
          <Message
            me={msg.user.id === user.id}
            message={msg.message}
            delivered={msg.delivered}
            senderName={msg.user.name}
            date={msg.time}
          />
        </ListItem>
      ))}
      <div ref={listRef} />
    </StyledList>
  )
}

export default ChatMessages
