import styled from 'styled-components'
import { Button, FormControl } from '@material-ui/core'

export const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const StyledHeader = styled.p`
  font-size: 30px;
  text-align: center;
`

export const StyledNameInput = styled(FormControl)`
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
`

export const StyledSubmitButton = styled(Button)`
  width: 30%;
  margin: 0 auto !important;
  margin-top: 20px !important;
`