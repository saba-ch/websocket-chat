const markMessageAsDelivered = (messages, message) => {
  return messages.map(convMessage => {
    if (
      (convMessage.user.id === message.user.id) &&
      (convMessage.message === message.message) &&
      (convMessage.delivered === false)
    ) {
      return { ...message, delivered: true }
    }
    return convMessage
  })
}

export const buildMessage = (conversationId, sendDate, message, user) => ({
  conversation_id: conversationId,
  message: {
    id: sendDate.toString(),
    time: sendDate,
    message,
    user: {
      id: user.id,
      name: user.name
    },
    delivered: false
  }
})

export default {
  markMessageAsDelivered,
  buildMessage
}