import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Input, InputLabel } from '@material-ui/core'

import { WebSocketContext } from 'socket'

import * as userActions from 'state/user/userActions'

import {
  StyledContainer,
  StyledForm,
  StyledNameInput,
  StyledSubmitButton,
  StyledHeader
} from './JoinRoomStyles'

const JoinRoom = () => {
  const [userName, setUserName] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const { connect } = useContext(WebSocketContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    connect({ user_id: userName, user_name: userName })

    dispatch(
      userActions.setUser({
        id: userName,
        name: userName
      })
    )

    history.push('/room/1')
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
