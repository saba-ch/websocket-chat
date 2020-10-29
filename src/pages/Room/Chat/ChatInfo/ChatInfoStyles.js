import styled from 'styled-components'
import { Toolbar } from '@material-ui/core'

export const StyledToolbar = styled(Toolbar)`
  display: grid !important;
  grid-template-columns: 1fr 2fr 10fr;
`

export const StyledRoomTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
