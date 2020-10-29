import * as conversationTypes from './conversationTypes'

export const setConversations = (payload) => ({
  type: conversationTypes.SET_CONVERSATIONS,
  payload
})

export const setCurrentConversation = (payload) => ({
  type: conversationTypes.SET_CURRENT_CONVERSATION,
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

export const setDelivered = (payload) => ({
  type: conversationTypes.SET_DELIVERED,
  payload
})
