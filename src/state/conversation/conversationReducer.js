import { messageHelpers } from 'helpers'

import * as conversationTypes from './conversationTypes'

const initialState = {
  conversations: [],
  roomId: null,
  currentConversation: null
}

const conversationReducer = (state = initialState, action) => {
  switch(action.type) {
    case conversationTypes.SET_CONVERSATIONS: {
      return { ...state, conversations: action.payload }
    }
    case conversationTypes.ADD_CONVERSATION: {
      const conversations = [...state.conversations, action.payload]
      return { ...state, conversations }
    }
    case conversationTypes.SET_CURRENT_CONVERSATION: {
      const currentConversation = state.conversations.find(conversation => conversation.id === action.payload.conversationId)
      return { ...state, currentConversation }
    }

    case conversationTypes.SET_DELIVERED: {
      const { conversationId, message } = action.payload

      const conversations = state.conversations.map(conversation => {
        if (conversation.id === conversationId) {
          return {
            ...conversation,
            messages: messageHelpers.markMessageAsDelivered(conversation.messages, message)
          }
        }
        return { ...conversation }
      })

      const currentConversation = (conversationId === state.currentConversation?.id) ?
        ({
          ...state.currentConversation,
          messages: messageHelpers.markMessageAsDelivered(state.currentConversation.messages, message)
        })
        :
        state.currentConversation

      return { ...state, conversations, currentConversation }
    }
    case conversationTypes.ADD_MESSAGE: {
      const { conversationId, message } = action.payload

      const conversations = state.conversations.map(conversation => {
        if (conversation.id === conversationId) {
          return { ...conversation, messages: [...conversation.messages, message] }
        }
        return conversation
      })

      const currentConversation =  (conversationId === state.currentConversation?.id) ?
        ({
          ...state.currentConversation,
          messages: [...state.currentConversation.messages, message],
        })
        :
        state.currentConversation
      
      return {
        ...state,
        conversations,
        currentConversation
      }
    }
    default:
      return state
  }
}

export default conversationReducer