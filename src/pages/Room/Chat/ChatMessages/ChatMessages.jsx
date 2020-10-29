import React from 'react'
import {
  ListItem,
} from '@material-ui/core'

import Message from 'components/Message'

import { StyledList } from './ChatMessagesStyles'

const ChatMessages = () => {
  return (
    <StyledList>
      <ListItem key="1">
        <Message me />
      </ListItem>
      <ListItem key="2">
        <Message />
      </ListItem>
    </StyledList>
  )
}

export default ChatMessages
