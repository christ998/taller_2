<template>
  <div class="is-flex-desktop is-flex-touch is-flex-tablet is-flex-wrap-wrap is-justify-content-center">
    <div v-for="(item, index) in films" :key="index" class="">
      <card-film class="mx-3" :film-props="item"></card-film>
    </div>
  </div>

</template>

<script>
import CardFilm from '../components/FilmCard'

export default {
  name: 'FilmCardList',
  props: {
    films: []
  },
  components: {
    CardFilm
  },
  data () {
    return {
      imagen: Object
    }
  }

}
</script>

<style>

</style>
