import React, { useState } from 'react'
import { Fab, Grid, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { useSocket } from 'socket'
import socketEvents from 'socket/socketEvents'
import socketManager from 'socket/socketManager'

import { messageHelpers } from 'helpers'
import conversationSelectors from 'state/conversation/conversationSelectors'
import userSelectors from 'state/user/userSelectors'

import { StyledGrid } from './ChatInputStyles'

const ChatInput = () => {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const conversationId = useSelector(conversationSelectors.currentConversationIdSelector)
  const user = useSelector(userSelectors.userSelector)
  
  const { send } = useSocket(socketEvents.newMessage)

  const handleSend = (e) => {
    e.preventDefault()
    if (!message) return

    const sendDate = new Date()
    const msg = messageHelpers.buildMessage(conversationId, sendDate, message, user)

    send(
      { conversation_id: conversationId, message },
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
