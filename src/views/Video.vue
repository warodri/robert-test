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
import VideoPlayer from "../common/video";

export default {
  name: "Video",
  data() {
    return {
      playing: false,
      options: {}
    };
  },
  mounted() {
    if (this.$route.params && this.$route.params.movie) {
      VideoPlayer.setVideoPoster(this.$route.params.movie.poster);
      VideoPlayer.setVideoSource(this.$route.params.movie.video);
    }
    VideoPlayer.getPlayer(this.$refs.videoPlayer);
    this.options = VideoPlayer.getOptions();
  },
  beforeDestroy() {
    VideoPlayer.disposePlayer();
  },
  methods: {
    play() {
      const response = VideoPlayer.playVideo();
      this.playing = response;
      return response;
    },
    pause() {
      const response = VideoPlayer.pauseVideo();
      this.playing = !response;
      return response;
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
