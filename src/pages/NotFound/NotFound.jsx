import { Container } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  StyledContainer,
  StyledDescription,
  StyledHeader,
  StyledCompanyName,
  StyledGoBack
} from './NotFoundStyles'

const NotFound = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <StyledContainer>
      <Container>
      <StyledHeader>404</StyledHeader>
      <StyledDescription>Lost in the woods</StyledDescription>
      <StyledDescription>strange howls of nothingness it feels unknown here</StyledDescription>
      <StyledGoBack onClick={goBack}>Go Back</StyledGoBack>
      <StyledCompanyName>New Row Chat</StyledCompanyName>
      </Container>
    </StyledContainer>
  )
}

export default NotFound
