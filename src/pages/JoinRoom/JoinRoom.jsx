import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input, InputLabel } from '@material-ui/core'

import * as userActions from 'state/user/userActions'
import Socket from 'socket'

import {
  StyledContainer,
  StyledForm,
  StyledNameInput,
  StyledSubmitButton,
  StyledHeader
} from './JoinRoomStyles'

const JoinRoom = () => {
  const [userName, setUserName] = useState('')
  const [roomId, setRoomId] = useState('')
  const [userId, setUserId] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    Socket.connect({ user_id: userId, user_name: userName, room_id: roomId })

    dispatch(
      userActions.setUser({
        id: userName,
        name: userName,
        roomId
      })
    )
  }

  return (
    <StyledContainer>
      <StyledHeader>Join Room</StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <StyledNameInput fullWidth>
          <InputLabel htmlFor='user-name'>Your name</InputLabel>
          <Input value={userName} onChange={e => setUserName(e.target.value)} id='user-name' />
        </StyledNameInput>
        <StyledNameInput fullWidth>
          <InputLabel htmlFor='room-id'>Room Id</InputLabel>
          <Input value={roomId} onChange={e => setRoomId(e.target.value)} id='room-id' />
        </StyledNameInput>
        <StyledNameInput fullWidth>
          <InputLabel htmlFor='user-id'>User Id</InputLabel>
          <Input value={userId} onChange={e => setUserId(e.target.value)} id='user-id' />
        </StyledNameInput>
        <StyledSubmitButton
          variant='contained'
          type='submit'
          color='primary'
        >
          JOIN
        </StyledSubmitButton>
      </StyledForm>
      <div />
    </StyledContainer>
  )
}

export default JoinRoom
