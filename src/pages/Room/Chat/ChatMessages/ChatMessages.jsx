import React from 'react'
import {
  Grid,
  ListItem,
  ListItemText,
} from '@material-ui/core'

import { StyledList } from './ChatMessagesStyles'

const ChatMessages = () => {
  return (
    <StyledList>
      <ListItem key="1">
        <Grid container>
          <Grid item xs={12}>
            <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText align="right" secondary="09:30"></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    </StyledList>
  )
}

export default ChatMessages
