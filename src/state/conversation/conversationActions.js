import * as conversationTypes from './conversationTypes'

const setConversations = (payload) => ({
  type: conversationTypes.SET_CONVERSATIONS,
  payload
})

const setCurrentConversation = (payload) => ({
  type: conversationTypes.SET_CURRENT_CONVERSATION,
  payload
})

const addConversation = (payload) => ({
  type: conversationTypes.ADD_CONVERSATION,
  payload
})

const addMessage = (payload) => ({
  type: conversationTypes.ADD_MESSAGE,
  payload
})

const setDelivered = (payload) => ({
  type: conversationTypes.SET_DELIVERED,
  payload
})

export default {
  setConversations,
  setCurrentConversation,
  addConversation,
  addMessage,
  setDelivered
}