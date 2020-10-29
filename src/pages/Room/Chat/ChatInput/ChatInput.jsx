import React, { useState } from 'react'
import { Fab, Grid, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import Socket from 'socket'
import * as socketEvents from 'socket/socketEvents'
import * as socketManager from 'socket/socketManager'

import * as conversationSelectors from 'state/conversation/conversationSelectors'
import * as userSelectors from 'state/user/userSelectors'

import { StyledGrid } from './ChatInputStyles'

const ChatInput = () => {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const conversationId = useSelector(conversationSelectors.currentConversationIdSelector)
  const user = useSelector(userSelectors.userSelector)

  const handleSend = (e) => {
    e.preventDefault()
    const sendDate = new Date()
    const msg = {
      conversation_id: conversationId,
      message: {
        id: sendDate.toString(),
        time: sendDate,
        message,
        user: {
          id: user.id,
          name: user.name
        },
        delivered: false
      }
    }
    Socket.emit(
      socketEvents.newMessage,
      {
        conversation_id: conversationId,
        message
      },
      () => socketManager.sendMessage(dispatch)(msg)
    )
    setMessage('')
  }
  
  return (
    <form onSubmit={handleSend}>
      <StyledGrid container>
        <Grid item xs={11}>
          <TextField
            label="Type Something"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            fullWidth
            autoFocus
          />
        </Grid>
        <Grid item xs={1} align="right">
          <Fab type='submit' color="primary" aria-label="add">Send</Fab>
        </Grid>
      </StyledGrid>
    </form>
  )
}

export default ChatInput
