import { Snackbar } from '@material-ui/core'
import styled from 'styled-components'

export const StyledSnackbar = styled(Snackbar)`
  .MuiSnackbarContent-root {
    background: ${(p) => p.success === 'true' ? '#4caf50' : '#f44336'} !important;
  }
`