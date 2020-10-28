import * as conversationTypes from './conversationTypes'

export const setConversations = (payload) => ({
  type: conversationTypes.SET_CONVERSATIONS,
  payload
})

export const addConversation = (payload) => ({
  type: conversationTypes.ADD_CONVERSATION,
  payload
})

export const addMessage = (payload) => ({
  type: conversationTypes.ADD_MESSAGE,
  payload
})
