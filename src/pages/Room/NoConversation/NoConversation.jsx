import React from 'react'
import { Typography } from '@material-ui/core'

import {
  StyledContainer
} from './NoConversationStyles'

const NoConversation = () => {
  return (
    <StyledContainer>
      <Typography variant='h3' color='inherit'>
        Get Started
      </Typography>
      <Typography variant='h6' color='inherit'>
        Select conversation
      </Typography>
    </StyledContainer>
  )
}

export default NoConversation
