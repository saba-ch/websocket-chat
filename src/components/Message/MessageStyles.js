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

export const StyledMessage = styled(ListItemText)`
  color: ${({ textColor }) => textColor};
  ${({ marginDir }) => `margin-${marginDir}: 10px`};
`