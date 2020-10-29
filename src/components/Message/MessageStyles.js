import styled from 'styled-components'
import { ListItemText } from '@material-ui/core'

export const StyledContainer = styled.div`
  border-radius: 10px;
  background-color: ${({ me }) => me ? '#0084ff' : '#e4e6eb'};
  ${({ me }) => `margin-${me ? 'left' : 'right'}: auto`};
`

export const StyledTimeStamp = styled(ListItemText)`
  ${({ me }) => `margin-${me ? 'right' : 'left'}: 10px`};
  display: inline-block;
  flex: inherit;
`

export const StyledSender = styled(ListItemText)`
  ${({ me }) => `margin-${me ? 'right' : 'left'}: 10px`};
`

export const StyledMessage = styled(ListItemText)`
  color: ${({ me }) => me ? '#fff' : '#050505'};
  ${({ me }) => `margin-${me ? 'right' : 'left'}: 10px`};
`

export const StyledMessageStatus = styled.div`
  display: flex;
  align-items: center;
`

export const StyledMessageIcon = styled.img`
  height: 20px;
  margin-right: 10px;
  margin-left: auto;
`
