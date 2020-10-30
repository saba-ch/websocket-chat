import React from 'react'
import { AppBar, Avatar, IconButton, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'

import conversationSelectors from 'state/conversation/conversationSelectors'
import roomSelectors from 'state/room/roomSelectors'

import {
  StyledRoomTitleContainer,
  StyledToolbar,
  StyledContainer
} from './ChatInfoStyles'

const ChatInfo = () => {
  const conversationName = useSelector(conversationSelectors.currentConversationNameSelector)
  const usersLength = useSelector(roomSelectors.roomUsersLengthSelector)

  return (
    <StyledContainer>
      <AppBar elevation={0} color='default' position='relative'>
        <StyledToolbar variant='regular'>
          <IconButton
            aria-label="account of current user"
            color="inherit"
          >
            <Avatar alt='name' />
          </IconButton>
          <StyledRoomTitleContainer>
            <Typography variant='h6' color='inherit'>
              {conversationName}
            </Typography>
            <Typography color='inherit'>
              {usersLength} user in conversation
            </Typography>
          </StyledRoomTitleContainer>
        </StyledToolbar>
      </AppBar>
    </StyledContainer>
  )
}

export default ChatInfo
