import styled from 'styled-components'
import { ListItemText } from '@material-ui/core'

export const StyledContainer = styled.div`
  border-radius: 10px;
  background-color: ${({ bgColor }) => bgColor};
  ${({ marginDir }) => `margin-${marginDir}: auto`};
`

export const StyledTimeStamp = styled(ListItemText)`
  ${({ marginDir }) => `margin-${marginDir}: 10px`};
`

export const StyledSender = styled(ListItemText)`
  ${({ marginDir }) => `margin-${marginDir}: 10px`};
`

export const StyledMessage = styled(ListItemText)`
  color: ${({ textColor }) => textColor};
  ${({ marginDir }) => `margin-${marginDir}: 10px`};
`

export const StyledMessageStatus = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`

export const StyledMessageIcon = styled.img`
  height: 20px;
  margin-left: 5px;
  margin-right: auto;
`
