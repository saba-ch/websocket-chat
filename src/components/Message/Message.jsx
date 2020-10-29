import React, { useMemo } from 'react'
import { Grid } from '@material-ui/core'

import {
  StyledContainer,
  StyledTimeStamp,
  StyledMessage
} from './MessageStyles'

const Message = ({ me, message, senderName, date, delivered }) => {
  const align = useMemo(() => me ? 'right' : 'left', [me])
  const bgColor = useMemo(() => me ? '#0084ff' : '#e4e6eb', [me])
  const textColor = useMemo(() => me ? '#fff' : '#050505', [me])
  const marginDir = useMemo(() => me ? 'left' : 'right', [me])
  
  const formattedDate = useMemo(() => `${new Date(date).getHours()}:${new Date(date).getMinutes()}`, [date])

  const messageState = useMemo(() => {
    if(!me) return ''
    if(me && !delivered) return 'sending '
    if(me && delivered) return 'delivered '
  }, [me, delivered])

  return (
    <StyledContainer bgColor={bgColor} marginDir={marginDir}>
      <Grid container>
        <Grid item xs={12}>
          <StyledTimeStamp
            align={align}
            marginDir={align}
            secondary={senderName}
          />
          <StyledMessage
            align={align}
            marginDir={align}
            primary={message}
            textColor={textColor}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTimeStamp
            align={align}
            marginDir={align}
            secondary={`${messageState}${formattedDate}`}
          />
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default React.memo(Message)
