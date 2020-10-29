
export const rootConversationSelector = (state) => state.conversation

export const conversationsSelector = (state) => rootConversationSelector(state).conversations

export const currentConversationIdSelector = (state) => rootConversationSelector(state).currentConversation

export const conversationSelector = (state, conversationId) => rootConversationSelector(state)
  .conversations
  .find(conversation => conversation.id === conversationId)

export const conversationMessagesSelector = (state, conversationId) => rootConversationSelector(state)
  .conversations
  .find(conversation => conversation.id === conversationId).messages
