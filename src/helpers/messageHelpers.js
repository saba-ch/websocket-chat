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

const buildMessage = (conversationId, sendDate, message, user) => ({
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

const addDefaultZero = (num) => {
  const str = num.toString()
  return str.length === 1 ? `0${str}` : str
}

const formatDate = (date) => {
  const hours = addDefaultZero(date.getHours())
  const minutes = addDefaultZero(date.getMinutes())
  
  return `${hours}:${minutes}`
}

export default {
  markMessageAsDelivered,
  buildMessage,
  formatDate
}