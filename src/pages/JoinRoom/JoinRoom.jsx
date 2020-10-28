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
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const roomId = 1

    Socket.connect({ user_id: userName, user_name: userName, room_id: roomId })

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
          <InputLabel htmlFor='my-input'>Your name</InputLabel>
          <Input value={userName} onChange={e => setUserName(e.target.value)} id='my-input' />
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
