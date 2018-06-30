<template>
  <div>
    <v-layout row wrap>
      <v-flex md5 xs12><address-search label="Departure" storeProperty="departure"></address-search></v-flex>

      <v-flex hidden-sm-and-down xs2 mt-3 text-xs-center>
        <v-icon large color="primary">near_me</v-icon>
      </v-flex>

      <v-flex md5 xs12><address-search label="Arrival" storeProperty="arrival"></address-search></v-flex>
    </v-layout>
    <v-layout row justify-center align-center>
      <v-btn @click="search" color="primary" large :loading="loading" :disabled="loading">
        <v-icon class="mr-3">search</v-icon>
        SEARCH
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
import AddressSearch from '@/components/navigation/AddressSearch'

export default {
  components: { AddressSearch },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    search: function () {
      const from = this.$store.getters.departureLocation
      const to = this.$store.getters.arrivalLocation

      if (from && to) {
        this.loading = true

        const NAVITIA_URL = `https://api.navitia.io/v1/coverage/fr-se/journeys?from=${encodeURI(from)}&to=${encodeURI(to)}`
        const NAVITIA_API_KEY = this.$store.getters.api_key

        let request = new Request(NAVITIA_URL)

        let headers = new Headers()
        headers.append('Authorization', NAVITIA_API_KEY)

        fetch(request, {headers: headers}).then(res => {
          this.loading = false
          res.json().then(data => {
            if (data.journeys) {
              this.$store.dispatch('journeys', data.journeys)
            }
          })
        })
      }
    }
  }
}
</script>
