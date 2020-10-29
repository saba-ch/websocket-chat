import React from 'react'
import { Fab, Grid, TextField } from '@material-ui/core'

import { StyledGrid } from './ChatInputStyles'

const ChatInput = () => {
  return (
    <StyledGrid container>
      <Grid item xs={11}>
        <TextField id="outlined-basic-email" label="Type Something" fullWidth />
      </Grid>
      <Grid xs={1} align="right">
        <Fab color="primary" aria-label="add">Send</Fab>
      </Grid>
    </StyledGrid>
  )
}

export default ChatInput
