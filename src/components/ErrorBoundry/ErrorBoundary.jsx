import React from 'react'

import {
  StyledCompanyName,
  StyledContainer,
  StyledDescription,
  StyledHeader
} from './ErrorBoundaryStyles'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledContainer>
          <StyledHeader>Something went wrong</StyledHeader>
          <StyledDescription>Please contact our support for resolving this issue</StyledDescription>
          <StyledCompanyName>New Row Chat</StyledCompanyName>
        </StyledContainer>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
