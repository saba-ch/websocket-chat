
const rootConversationSelector = (state) => state.conversation

const conversationsSelector = (state) => rootConversationSelector(state).conversations

const currentConversationIdSelector = (state) => rootConversationSelector(state).currentConversation?.id

const currentConversationSelector = (state) => rootConversationSelector(state).currentConversation

const currentConversationNameSelector = (state) => rootConversationSelector(state).currentConversation?.name

const conversationSelector = (state, conversationId) => rootConversationSelector(state)
  .conversations
  .find(conversation => conversation.id === conversationId)

const currentConversationMessagesSelector = (state) => currentConversationSelector(state).messages

export default {
  rootConversationSelector,
  conversationsSelector,
  currentConversationIdSelector,
  currentConversationSelector,
  currentConversationNameSelector,
  conversationSelector,
  currentConversationMessagesSelector
}