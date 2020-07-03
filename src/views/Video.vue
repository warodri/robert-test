<template>
  <div class="container">
    <div class="buttons">
      <img
        src="http://hybridtv.ss7.tv/techtest/assets/icons/btn-play.png"
        class="play"
        v-bind:class="{ 'btn-selected': playing }"
        @click="play"
      />
      <img
        src="http://hybridtv.ss7.tv/techtest/assets/icons/btn-pause.png"
        class="pause"
        v-bind:class="{ 'btn-selected': !playing }"
        @click="pause"
      />
    </div>
    <div class="video-container">
      <video ref="videoPlayer" :options="options"></video>
    </div>
  </div>
</template>


<script>
import videojs from "video.js";

export default {
  name: "Video",
  data() {
    return {
      player: null,
      options: {
        autoplay: false,
        poster: "",
        sources: [
          {
            src: "",
            type: "video/mp4"
          }
        ]
      },
      playing: false
    };
  },
  mounted() {
    if (this.$route.params && this.$route.params.movie) {
        this.options.poster = this.$route.params.movie.poster;
        this.options.sources[0] = this.$route.params.movie.video;
        this.player = videojs(
          this.$refs.videoPlayer,
          this.options,
          function onPlayerReady() {
            // Player is ready
          }
        );
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    play() {
      if (this.player) {
        this.player.play();
        this.playing = true;
        return true;
      }
      return false;
    },
    pause() {
      if (this.player) {
        this.player.pause();
        this.playing = false;
        return true;
      }
      return false;
    }
  }
};
</script>


<style scoped>
.container {
  background: black;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
.buttons {
  position: absolute;
  left: 0px;
  top: 80vh;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 80px;
  z-index: 999;
  padding: 1rem;
  background: black;
}
.play {
  margin-right: 2rem;
}
.play,
.pause {
  cursor: pointer;
  padding: 0.5rem;
}
.vjs-tech {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
}
.btn-selected {
  background-color: #ffd700;
}
</style>
