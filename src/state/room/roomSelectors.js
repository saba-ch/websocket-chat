const roomSelector = (state) => state.room

const roomIdSelector = state => roomSelector(state).id

const roomUsersSelector = state => roomSelector(state).users

const roomUsersLengthSelector = state => roomSelector(state).users?.length

export default {
  roomSelector,
  roomIdSelector,
  roomUsersSelector,
  roomUsersLengthSelector
}