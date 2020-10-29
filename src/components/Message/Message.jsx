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
  const align = useMemo(() => me ? 'right' : 'left', [me])
  const bgColor = useMemo(() => me ? '#0084ff' : '#e4e6eb', [me])
  const textColor = useMemo(() => me ? '#fff' : '#050505', [me])
  const marginDir = useMemo(() => me ? 'left' : 'right', [me])
  
  const formattedDate = useMemo(() => messageHelpers.formatDate(new Date(date)), [date])

  const messageState = useMemo(() => {
    if(!me) return ''
    if (me && !delivered) return <StyledMessageIcon src={SendSvg} />
    if (me && delivered) return <StyledMessageIcon src={SentSvg} />
  }, [me, delivered])

  return (
    <StyledContainer bgColor={bgColor} marginDir={marginDir}>
      <Grid container>
        <Grid item xs={12}>
          <StyledSender
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
          <StyledMessageStatus>
            {messageState}
            <StyledTimeStamp
              align={align}
              marginDir={align}
              secondary={formattedDate}
            />
          </StyledMessageStatus>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default React.memo(Message)
