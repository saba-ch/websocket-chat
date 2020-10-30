import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { eventManager } from 'utils'

import { StyledSnackbar } from './NotificationStyles'

const Notification = () => {
  const [notification, setNotification] = useState({ open: false, message: '', success: false })

  useEffect(() => {
    let timer

    eventManager.addListener('notification', ({ success, message }) => {
      setNotification({ open: true, message, success })

      timer = setTimeout(() => {
        setNotification({ open: false, message: '', success: false })
      }, 3000)
    })

    return () => clearTimeout(timer)
  }, [])

  const { open, message, success } = notification

  return ReactDOM.createPortal(
    <StyledSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      message={message}
      success={success.toString()}
    />,
    document.getElementById('root')
  )
}

export default Notification
