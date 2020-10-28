export const roomSelector = (state) => state.room

export const roomIdSelector = state => roomSelector(state).id

export const roomUsersSelector = state => roomSelector(state).users
