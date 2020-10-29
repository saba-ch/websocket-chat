import React from 'react'
import { useSelector } from 'react-redux'
import { AppBar, Avatar, IconButton, Typography } from '@material-ui/core'

import * as roomSelectors from 'state/room/roomSelectors'
import * as userSelectors from 'state/user/userSelectors'

import {
  StyledToolbar
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
          <IconButton
            aria-label="account of current user"
            color="inherit"
          >
            <Avatar>
              {user.name.slice(0, 1)}
            </Avatar>
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </div>
  )
}

export default UserInfo
