import axios from 'axios'
// apiKey necesaria para realizar consultas en TheMovieDBconst
const apiKey = '9fb98527ed4b2f39026a8ba4ff0e1683'
const baseURL = 'https://api.themoviedb.org/3/movie/'

class ApiService {
  constructor () {
    this.resource = axios.create({
      baseURL
    })
    this.apiKey = `api_key=${apiKey}&language=es-ES`
  }

  async getPopular (currentPage) {
    return await this.resource.get(`popular?${this.apiKey}&page=${currentPage}`)
  }

  getTopRated (currentPage) {
    return this.resource.get(`top_rated?${this.apiKey}&page=${currentPage}`)
  }

  getMovie (movieId) {
    return this.resource.get(`${movieId}?${this.apiKey}`)
  }
}

export default new ApiService()
