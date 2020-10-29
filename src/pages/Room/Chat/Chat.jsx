import React from 'react'
import { Divider } from '@material-ui/core'

import ChatInfo from './ChatInfo'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

import { StyledContainer } from './ChatStyles'

const Chat = () => {
  return (
    <StyledContainer>
      <ChatInfo />
      <ChatMessages />
      <Divider />
      <ChatInput />
    </StyledContainer>
  )
}

export default Chat
