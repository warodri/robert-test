<template>
  <div class="home">
    <Carousel v-bind:movies="movies" v-on:movie-selected="movieSelected" />
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import ApiCalls from '../common/api';

export default {
  name: "Home",
  components: {
    Carousel
  },
  data() {
    return {
      movies: []
    };
  },
  /**
   * Get all movies from server
   * 
   * NOTE: No specs for handling this error visually 
   * so I just do console log.
   */
  async beforeMount() {
    this.movies = await this.loadMovies();
  },
  methods: {
      /**
       * Loads all movies from server
       */
      loadMovies() {
          return ApiCalls.movies();
      },
      /**
       * Movie is selected
       * Send to the video screen
       */
      movieSelected(movie, isCurrent) {
          if (isCurrent) {
            this.$router.push({ name: 'Video', params: { movie } })
          }
      }      
  },
};
</script>

<style scoped>
</style>

