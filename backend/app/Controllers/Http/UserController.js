'use strict'

const Ws = use('Ws')
const User = use('App/Models/User')

class UserController {
  async index ({ response }) {
    const users = await User
      .query()
      .orderBy('created_at', 'desc')
      .fetch()

    return response.send(users)
  }

  async create ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    const chat = Ws.getChannel('chat').topic('chat')

    if (chat) {
      chat.broadcastToAll('receivedUser', data)
    }

    return user
  }
}

module.exports = UserController
