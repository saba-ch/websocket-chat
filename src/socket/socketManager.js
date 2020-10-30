
import roomActions from 'state/room/roomActions'
import conversationActions from 'state/conversation/conversationActions'

const onRoomInfo = (dispatch) => (payload) => {
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

const onUserJoined = dispatch => (payload) => {
  dispatch(roomActions.addRoomUser(payload.user))
}

const onUserLeft = dispatch => (payload) => {
  dispatch(roomActions.removeRoomUser({ userId: payload.userKey }))
}

const onNewMessage = (dispatch, currentUserId) => (payload) => {
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

const sendMessage = dispatch => (payload) => {
  dispatch(conversationActions.addMessage({
    conversationId: payload.conversation_id,
    message: payload.message
  }))
}

export default {
  onRoomInfo,
  onUserJoined,
  onUserLeft,
  onNewMessage,
  sendMessage
}
