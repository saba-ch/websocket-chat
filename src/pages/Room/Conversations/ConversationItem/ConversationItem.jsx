import React from 'react'
import { useDispatch } from 'react-redux'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'

import * as conversationActions from 'state/conversation/conversationActions'

import { StyledTypography } from './ConversationItemStyles'

const ConversationItem = ({ conversationName, message, senderName, selected, conversationId }) => {
  const dispatch = useDispatch()

  const handleSelect = () => {
    if (selected) return
    dispatch(
      conversationActions.setCurrentConversation({
        conversationId
      })
    )
  }

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
                {message}
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
