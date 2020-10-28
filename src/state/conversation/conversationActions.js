import * as conversationTypes from './conversationTypes'

export const setConversations = (payload) => ({
  type: conversationTypes.SET_CONVERSATIONS,
  payload
})

export const addConversation = (payload) => ({
  type: conversationTypes.ADD_CONVERSATION,
  payload
})

export const removeConversation = (payload) => ({
  type: conversationTypes.REMOVE_CONVERSATION,
  payload
})
