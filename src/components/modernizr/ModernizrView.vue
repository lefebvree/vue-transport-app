<template>
  <div>
    <v-list two-line subheader>
      <v-subheader>Device Sensors</v-subheader>
      <v-list-tile v-for="feature in features" :key="feature.modernizrName" avatar>
        <v-list-tile-action>
          <v-icon >{{ feature.supported ? 'check_circle' : 'block' }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ feature.name }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ feature.modernizrName }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import modernizr from 'modernizr'

export default {
  name: 'ModernizrView',
  data () {
    return {
      features: [
        { name: 'Geolocation API', modernizrName: 'geolocation', supported: false },
        { name: 'Orientation and Motion Events', modernizrName: 'deviceorientation', supported: false },
        { name: 'DOM Pointer Events API', modernizrName: 'csspointerevents', supported: false },
        { name: 'Local Storage', modernizrName: 'localstorage', supported: false },
        { name: 'Vibration API', modernizrName: 'vibrate', supported: false },
        { name: 'Canvas', modernizrName: 'canvas', supported: false },
        { name: 'Battery API', modernizrName: 'batteryapi', supported: false }
      ]
    }
  },
  created: function () {
    this.features.forEach(feature => {
      feature.supported = this.checkIfSupported(feature.modernizrName)

      if (feature.modernizrName === 'geolocation' && feature.supported) {
        navigator.geolocation.getCurrentPosition(position => {
          feature.modernizrName += ` (${position.coords.latitude}, ${position.coords.longitude})`
        })
      }
    })
  },
  methods: {
    checkIfSupported: function (name) {
      return modernizr[name]
    }
  }
}
</script>
