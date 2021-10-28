<template>
  <div class="box" v-if="bool">
    <div id="contenedor">
      <div class="portada"
           :style="imagen">
        <!--        <img :src="movie.backdrop_path">-->
      </div>
      <div class="text-absolute-centred">
        {{ film.original_title }}
      </div>
    </div>

    <div class="" style="max-width: 500px">
      <ul>
        <li><strong>Idioma:</strong> {{ film.original_language }}</li>
        <li><strong>Fecha Estreno:</strong> {{ film.release_date }}</li>
        <!--        <li><strong>Overview:</strong> {{ film.overview }}</li>-->
        <li><strong>Puntuación: </strong> {{ film.vote_average }}</li>
      </ul>
      <div class="is-flex is-justify-content-center">
        <button class="button is-info" @click="deployFilm">Ver más</button>
      </div>
    </div>
  </div>
</template>

<script>
import Movie from '../models/movie'

export default {
  name: 'CardFilm',
  props: {
    filmProps: Object
  },
  data () {
    return {
      film: Movie,
      bool: false
    }
  },
  methods: {
    deployFilm () {
      const fil = this.film
      this.$router.push({
        name: 'FilmParticular',
        params: {
          id: fil.id,
          film: fil
        }
      })
    }
  },
  created () {
    this.film = new Movie(this.filmProps)
    this.imagen = {
      'background-image': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 90%),' + `url(${this.film.backdrop_path})`
    }
    this.bool = true
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&family=Poppins&display=swap');

.text-absolute-centred {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: 'Poppins', sans-serif;
  color: white;
  font-weight: bold;
  font-size: 22px;
}

#contenedor {
  position: relative;
}

ul {
  word-wrap: break-word;

}

li {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
}

.portada {
  height: 281px;
  width: 500px;

}
</style>
