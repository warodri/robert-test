import videojs from "video.js";

export default {

    player: null,

    playing: false,

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

    getPlayer(videoPlayerRef) {
        this.player = videojs(
            videoPlayerRef,
            this.options,
            function onPlayerReady() {
                // Player is ready
            }
        );
        return this.player;
    },

    getOptions() {
        return this.options;
    },

    setVideoPoster(posterUrl) {
        this.options.poster = posterUrl;
    },

    setVideoSource(sourceUrl) {
        this.options.sources[0] = sourceUrl;
    },

    setIsPlaying(value) {
        this.playing = value;
    },

    playVideo() {
        if (this.player) {
            this.player.play();
            this.playing = true;
            return true;
        }
        return false;
    },

    pauseVideo() {
        if (this.player) {
            this.player.pause();
            this.playing = false;
            return true;
        }
        return false;
    },

    isPlaying() {
        return this.playing;
    },

    disposePlayer() {
        if (this.player) {
            this.player.dispose();
        }
    }

}