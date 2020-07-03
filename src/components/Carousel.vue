<template>
  <div class="carousel">
    <carousel-3d v-if="movies.length > 0">
      <slide v-for="(movie, i) in movies" :key="i" :index="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
          <img
            :data-index="index"
            :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }"
            :src="movie.poster"
            @click="$emit('movie-selected', movie, isCurrent)"
          />
        </template>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "Carousel",
  components: {
    Carousel3d,
    Slide
  },
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
};
</script>


<style scoped>
/** Style for carousel slides */
.carousel-3d-container,
.carousel-3d-slide,
.carousel-3d-slide img {
  height: 600px !important;
}
/** Style for focused carousel slide */
.current {
  border: 2px solid #ffd700;
}
</style>

