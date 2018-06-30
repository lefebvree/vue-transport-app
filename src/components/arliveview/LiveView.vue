<template>
  <div class="ar-video">
    <img src="@/assets/arrow.png" id="directionArrow" height="300" width="300"/>
    <video id="camera" width="100%" height="480" autoplay></video>
  </div>
</template>

<script>
export default {
  data () {
    return {
      camera: false,
      videoElement: null
    }
  },
  computed: {
    videoWidth: function () {
      return this.videoElement.clientWidth
    },
    videoHeight: function () {
      return this.videoElement.clientHeight
    }
  },
  mounted: function () {
    this.openCamera()
    window.addEventListener('deviceorientation', this.orientationChange, true)
  },
  methods: {
    openCamera: function () {
      this.videoElement = document.getElementById('camera')
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
          audio: false
        }).then(function (stream) {
          this.videoElement.srcObject = stream
        }.bind(this))
      }
    },
    orientationChange: function (event) {
      document.getElementById('directionArrow').style.transform =
        'rotateX(' + event.beta + 'deg) ' +
        'rotateZ(' + event.alpha + 'deg)'
    }
  }
}
</script>

<style>
  .ar-video {
    position: relative;
  }

  .ar-video img {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0;

    transform: rotateX(60deg);
  }
</style>
