import React, { useMemo } from 'react'
import { Grid } from '@material-ui/core'

import { SendSvg, SentSvg } from 'assets/svg'
import { messageHelpers } from 'helpers'

import {
  StyledContainer,
  StyledTimeStamp,
  StyledMessage,
  StyledMessageStatus,
  StyledMessageIcon,
  StyledSender
} from './MessageStyles'

const Message = ({ me, message, senderName, date, delivered }) => {
  const aligned = useMemo(() => me ? 'right' : 'left', [me])
  
  const formattedDate = useMemo(() => messageHelpers.formatDate(new Date(date)), [date])

  const messageState = useMemo(() => {
    if (me && !delivered) return <StyledMessageIcon src={SendSvg} />
    if (me && delivered) return <StyledMessageIcon src={SentSvg} />
  }, [me, delivered])

  return (
    <StyledContainer me={me}>
      <Grid container>
        <Grid item xs={12}>
          {!me && 
            <StyledSender
              align={aligned}
              me={me}
              secondary={senderName}
            />
          }
          <StyledMessage
            align={aligned}
            me={me}
            primary={message}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledMessageStatus>
            {me && messageState}
            <StyledTimeStamp
              align={aligned}
              me={me}
              secondary={formattedDate}
            />
          </StyledMessageStatus>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default React.memo(Message)
