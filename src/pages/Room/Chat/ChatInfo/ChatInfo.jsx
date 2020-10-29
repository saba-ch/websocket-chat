import React from 'react'
import { AppBar, Avatar, IconButton, Typography } from '@material-ui/core'

import {
  StyledRoomTitleContainer,
  StyledToolbar,
  StyledContainer
} from './ChatInfoStyles'

const ChatInfo = () => {
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
              Room Conversation
            </Typography>
            <Typography color='inherit'>
              12 users in conversation
            </Typography>
          </StyledRoomTitleContainer>
        </StyledToolbar>
      </AppBar>
    </StyledContainer>
  )
}

export default ChatInfo
