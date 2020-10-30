import React from 'react'
import { useSelector } from 'react-redux'
import { AppBar, Avatar, IconButton, Typography } from '@material-ui/core'

import roomSelectors from 'state/room/roomSelectors'
import userSelectors from 'state/user/userSelectors'

import {
  StyledToolbar,
  StyledUserInfoContainer
} from './UserInfoStyles'

const UserInfo = () => {
  const roomId = useSelector(roomSelectors.roomIdSelector)
  const user = useSelector(userSelectors.userSelector)

  return (
    <div>
      <AppBar>
        <StyledToolbar variant='dense'>
          <Typography variant='h6' color='inherit'>
            Room: {roomId}
          </Typography>
          <StyledUserInfoContainer>
            <IconButton
              aria-label="account of current user"
              color="inherit"
            >
              <Avatar>
                {user.name.slice(0, 1)}
              </Avatar>
            </IconButton>
            <Typography variant='subtitle1' color='inherit'>
              <p>User Id: {user.id}</p>
              <p>User Name: {user.name}</p>
            </Typography>
          </StyledUserInfoContainer>
        </StyledToolbar>
      </AppBar>
    </div>
  )
}

export default UserInfo
