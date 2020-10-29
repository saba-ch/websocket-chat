import React from 'react'
import { useSelector } from 'react-redux'
import { ListItem, Typography } from '@material-ui/core'

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
      <ListItem key='1'>
        <Typography variant='h6' color='inherit'>
          Conversations
        </Typography>
      </ListItem>
      {conversations.map(({ name, id, messages }) => (
        <ConversationItem
          key={id}
          selected={id === currentConversationId}
          conversationId={id}
          conversationName={name}
          message={messages[messages.length - 1]?.message}
          senderName={messages[messages.length - 1]?.user?.name}
        />
      ))}
    </StyledList>
  )
}

export default Conversations
