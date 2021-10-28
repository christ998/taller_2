<template>
  <div v-if="isLoaded">
    <nav-bar/>
    <div class="is-flex-desktop is-flex-touch is-justify-content-center my-5">
      <span>Películas más populares</span>
    </div>
    <film-card-list :films="films"></film-card-list>
    <div class="container my-4">
      <button :class="isFetching ? 'is-loading': '' " class="button is-medium is-fullwidth is-rounded is-success"
              @click="page++">Ver
        más
      </button>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from '../components/NavBar'
import FilmCardList from '../components/FilmCardList'
import ApiService from '../services/api.service'

export default {
  name: 'Home',
  components: {
    FilmCardList,
    NavBar
  },
  data () {
    return {
      films: [],
      page: 1,
      isLoaded: false,
      isFetching: false
    }
  },
  methods: {
    getPopularFilms: async function (page) {
      const newFilms = await ApiService.getPopular(page)
      return newFilms
    }
  },
  async created () {
    const filmsFetched = (await this.getPopularFilms(this.page)).data.results
    this.films = this.films.concat(filmsFetched)
    this.isLoaded = true
  },

  watch: {
    page: async function (newValue) {
      this.isFetching = true
      const newFilms = await this.getPopularFilms(newValue)
      this.films = this.films.concat(newFilms.data.results)
      this.isFetching = false
    }
  }

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

span {
  font-weight: bold;
  font-size: 26px;
}
</style>
