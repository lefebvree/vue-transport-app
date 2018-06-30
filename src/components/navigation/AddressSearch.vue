<template>
  <v-layout row>
    <v-btn icon @click="useGPS" class="mt-3">
      <v-icon :color="gpsUse ? 'primary' : 'grey'">{{ gpsIcon }}</v-icon>
    </v-btn>
    <v-select
      :label="gpsUse ? 'Use Current Location' : label"
      autocomplete
      :items="items" return-object
      :loading="loading"
      :search-input.sync="search"
      item-text="name"
      item-value="name"
      v-model="select"
      :disabled="gpsUse"
    >
    </v-select>
  </v-layout>
</template>

<script>
export default {
  props: ['label', 'storeProperty'],
  data () {
    return {
      search: null,
      loading: false,
      items: [],
      gpsUse: false
    }
  },
  watch: {
    search: function (value) {
      value && this.querySelections(value)
    }
  },
  computed: {
    select: {
      get: function () {
        return this.$store.getters[this.storeProperty]
      },
      set: function (value) {
        this.$store.dispatch(this.storeProperty, value)
      }
    },
    gpsIcon: function () {
      return this.gpsUse ? 'gps_fixed' : 'gps_not_fixed'
    }
  },
  methods: {
    useGPS: function () {
      if (this.gpsUse) {
        this.gpsUse = false
        this.select = {}
      } else {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
            this.gpsUse = true
            this.items = []
            this.select = {
              position: position.coords.longitude + ';' + position.coords.latitude
            }
          }.bind(this))
        }
      }
    },
    querySelections: function (value) {
      this.loading = true

      const NAVITIA_URL = `https://api.navitia.io/v1/coverage/fr-se/places?q=${encodeURI(value)}`
      const NAVITIA_API_KEY = this.$store.getters.api_key

      let request = new Request(NAVITIA_URL)

      let headers = new Headers()
      headers.append('Authorization', NAVITIA_API_KEY)

      fetch(request, {headers: headers}).then(res => {
        res.json().then(data => {
          this.loading = false
          this.items = data.places
        })
      })
    }
  }
}
</script>
