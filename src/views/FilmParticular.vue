<template>
  <div class="container">
    <img :src="film.backdrop_path">
    <div>
      <p>{{ film.overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmParticular',
  props: {
    id: Number,
    film: Object
  }

}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&family=Poppins&display=swap');

$font-stack: 'Manrope', sans-serif

p
  font: $font-stack
</style>
