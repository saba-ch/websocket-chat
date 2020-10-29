
import * as roomActions from 'state/room/roomActions'
import * as conversationActions from 'state/conversation/conversationActions'

export const onRoomInfo = (dispatch) => (payload) => {
  dispatch(roomActions.setRoom({ id: payload.room.id }))

  dispatch(roomActions.setRoomUsers(payload.room.users_list))

  const conversations = payload.room.conversations_list.map(({ conversationMessages: messages, id, name, lastMessage, type }) => ({
    id,
    messages,
    name,
    lastMessage,
    type
  }))

  dispatch(conversationActions.setConversations(conversations))
}

export const onUserJoined = dispatch => (payload) => {
  dispatch(roomActions.addRoomUser(payload.user))
}

export const onUserLeft = dispatch => (payload) => {
  dispatch(roomActions.removeRoomUser({ userId: payload.userKey }))
}

export const onNewMessage = (dispatch, currentUserId) => (payload) => {
  if (currentUserId === payload.message.user.id) {
    dispatch(
      conversationActions.setDelivered({
        conversationId: payload.conversation_id,
        message: payload.message
      })
    )
  } else {
    dispatch(
      conversationActions.addMessage({
        conversationId: payload.conversation_id,
        message: payload.message
      })
    )
  }
}

export const sendMessage = dispatch => (payload) => {
  dispatch(conversationActions.addMessage({
    conversationId: payload.conversation_id,
    message: payload.message
  }))
}
