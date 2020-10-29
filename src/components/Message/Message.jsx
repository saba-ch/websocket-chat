import React, { useMemo } from 'react'
import { Grid } from '@material-ui/core'

import {
  StyledContainer,
  StyledTimeStamp,
  StyledMessage
} from './MessageStyles'

const Message = ({ me }) => {
  const align = useMemo(() => me ? 'right' : 'left',[me])
  const bgColor = useMemo(() => me ? 'blue' : 'gray', [me])
  const marginDir = useMemo(() => me ? 'left' : 'right', [me])

  return (
    <StyledContainer bgColor={bgColor} marginDir={marginDir}>
      <Grid container>
        <Grid item xs={12}>
          <StyledMessage
            align={align}
            marginDir={align}
            primary="Hey man, What's up ?"
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTimeStamp
            align={align}
            marginDir={align}
            secondary="09:30"
          />
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default React.memo(Message)
