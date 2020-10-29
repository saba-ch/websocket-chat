import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'

import * as conversationSelectors from 'state/conversation/conversationSelectors'

import ConversationItem from './ConversationItem'

import {
  StyledList
} from './ConversationsStyles'

const Conversations = () => {
  const conversations = useSelector(conversationSelectors.conversationsSelector)
  const currentConversationId = useSelector(conversationSelectors.currentConversationIdSelector)

  return (
    <StyledList dense>
      <Typography variant='h6' color='inherit'>
        Conversations
      </Typography>
      {conversations.map(({ name, id, messages }) => (
        <ConversationItem
          key={id}
          selected={id === currentConversationId}
          conversationId={id}
          conversationName={name}
          message={messages[0]?.text}
          senderName={messages[0]?.sender?.name}
        />
      ))}
    </StyledList>
  )
}

export default Conversations
