
import * as roomActions from 'state/room/roomActions'
import * as conversationActions from 'state/conversation/conversationActions'

export const onRoomInfo = (dispatch) => (payload) => {
  dispatch(roomActions.setRoom({ id: payload.room.id }))

  dispatch(roomActions.setRoomUsers(payload.room.users_list))
  
  dispatch(conversationActions.setConversations(payload.room.conversations_list))
}

export const onUserJoined = dispatch => (payload) => {
  dispatch(roomActions.addRoomUser(payload.user))
}

export const onUserLeft = dispatch => (payload) => {
  dispatch(roomActions.removeRoomUser({ userId: payload.userKey }))
}