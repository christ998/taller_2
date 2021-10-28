<template>
  <div>
    <div class="contenedor mx-auto">
      <img :src="film.backdrop_path">
      <div>
        <p><strong>Overview</strong></p>
        <p>{{ film.overview }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import ApiService from '../services/api.service'
import Movie from '../models/movie'

export default {
  name: 'FilmParticular',
  props: {
    id: String
  },
  data () {
    return {
      film: Object
    }
  },
  async created () {
    const filmParticular = await ApiService.getMovie(this.id)
    console.log(filmParticular)

    this.film = new Movie(filmParticular.data)
  }

}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&family=Poppins&display=swap');

$font-stack: 'Manrope', sans-serif
$width-container: 800px
.contenedor
  max-width: $width-container

p
  font-family: $font-stack
</style>
