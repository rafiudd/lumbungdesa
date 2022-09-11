import BaseService from './BaseService'

class TourService extends BaseService {
  getAllTour(opts = {}) {
    const getApi = 'main'
    this.endPoint = 'tours/all/'
    return this.get(opts, getApi)
  }

  addTour(payload, opts = {}) {
    this.useApi = 'main'
    this.endPoint = 'tours/create/'
    return this.post(payload, opts)
  }

  editTour(payload, opts = {}) {
    this.useApi = 'main'
    this.endPoint = 'tours/update/'
    return this.put(payload, opts)
  }

  getDetailTour(opts = {}) {
    const getApi = 'main'
    this.endPoint = 'tours/detail/'
    return this.get(opts, getApi)
  }

  deleteTour(id, opts = {}) {
    const getApi = 'main'
    this.endPoint = `tours/delete/?tourId=${id}`
    return this.delete(opts, getApi)
  }
}

export default new TourService()
