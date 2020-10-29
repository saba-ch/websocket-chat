import * as conversationTypes from './conversationTypes'

const initialState = {
  conversations: [
    { messages: [] }
  ],
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
      return { ...state, currentConversation: action.payload.conversationId }
    }
    case conversationTypes.ADD_MESSAGE: {
      const { conversationId, message } = action.payload

      const conversations = state.conversations.map(conversation => {
        if(conversation.id === conversationId) {
          return { ...conversation, messages: [...conversation.messages, message] }
        }
        return { ...conversation }
      })
      
      return {
        ...state,
        conversations
      }
    }
    default:
      return state
  }
}

export default conversationReducer