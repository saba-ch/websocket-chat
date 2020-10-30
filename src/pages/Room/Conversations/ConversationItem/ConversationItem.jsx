import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'

import * as conversationActions from 'state/conversation/conversationActions'
import * as userSelectors from 'state/user/userSelectors'

import {
  StyledTypography,
  StyledMessage
} from './ConversationItemStyles'

const ConversationItem = ({ conversationName, selected, conversationId, latestMessage = {} }) => {
  const currentUser = useSelector(userSelectors.userSelector)
  const dispatch = useDispatch()

  const handleSelect = () => {
    if (selected) return
    dispatch(
      conversationActions.setCurrentConversation({
        conversationId
      })
    )
  }

  const senderName = useMemo(() => {
    if (latestMessage.user?.id === currentUser.id) return 'You'
    return latestMessage.user?.name
  }, [latestMessage, currentUser])

  const { message } = latestMessage

  return (
    <ListItem key={conversationId} onClick={handleSelect} selected={selected} alignItems='flex-start' button>
      <ListItemAvatar>
        <Avatar alt='name' />
      </ListItemAvatar>
      <ListItemText
        primary={conversationName}
        secondary={
          <>
            {message && (
              <>
                <StyledTypography
                  component='span'
                  variant='body2'
                  color='textPrimary'
                >
                  {senderName}:{' '}
                </StyledTypography>
                <StyledMessage>{message}</StyledMessage>
              </>
            )}
            {!message && (
              <StyledTypography
                component='span'
                variant='body2'
                color='textSecondary'
              >
                No messages here yet...
              </StyledTypography>
            )}
          </>
        }
      />
    </ListItem>
  )
}

export default React.memo(ConversationItem)
