import BaseService from './BaseService'

class UsersService extends BaseService {
  login(payload, opts = {}) {
    this.useApi = 'main'
    this.endPoint = 'users/login'
    return this.post(payload, opts)
  }

  getMe(opts = {}, token) {
    const userToken = token || this.token
    const getApi = 'main'
    this.endPoint = `users/?token=${userToken}`
    return this.get(opts, getApi)
  }

  getUser(id, opts = {}) {
    const getApi = 'main'
    this.endPoint = `users/detail/?userId=${id}`
    return this.get(opts, getApi)
  }

  getAllUsers(opts = {}) {
    const getApi = 'main'
    this.endPoint = 'users/all/'
    return this.get(opts, getApi)
  }

  register(payload, opts = {}) {
    this.useApi = 'main'
    this.endPoint = 'users/register?role=users'
    return this.post(payload, opts)
  }

  editUser(payload, id, opts = {}) {
    this.useApi = 'main'
    this.endPoint = `users/update?userId=${id}`
    return this.put(payload, opts)
  }

  deleteUser(id, opts = {}) {
    const getApi = 'main'
    this.endPoint = `users/detail?userId=${id}`
    return this.delete(getApi, opts)
  }
}

export default new UsersService()
