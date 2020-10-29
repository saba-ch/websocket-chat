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

export default {
  markMessageAsDelivered
}