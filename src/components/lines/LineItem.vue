<template>
  <div>
    <v-divider></v-divider>
    <v-list-tile avatar>
      <v-list-tile-avatar>
        <v-avatar :class="{green: downloaded, grey: !downloaded && !loading, orange: loading}" class="lighten-1">
          <span class="white--text headline">{{ line.code }}</span>
        </v-avatar>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>{{ line.name }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ line.id }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action class="hidden-sm-and-down">
        <v-btn @click="download" :loading="loading" :disabled="loading || downloaded" color="success">
          Download
          <v-icon v-if="!downloaded" right>cloud_download</v-icon>
          <v-icon v-else right>done</v-icon>
        </v-btn>
      </v-list-tile-action>
      <v-list-tile-action class="hidden-md-and-up">
        <v-btn v-if="!downloaded" @click="download" :loading="loading" :disabled="loading || downloaded" icon>
          <v-icon medium color="grey">cloud_download</v-icon>
        </v-btn>
        <v-icon v-else medium color="grey">done</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  props: ['line'],
  data: function () {
    return {
      loading: false
    }
  },
  computed: {
    stops: function () {
      // loading is called otherwise stops won't be updated from the store because vue doesn't monitor dictionaries elements
      if (!this.loading) return this.$store.getters.stops(this.line.id)
    },
    downloaded: function () {
      return this.stops !== undefined
    }
  },
  methods: {
    download: function () {
      this.loading = true

      const NAVITIA_DATE_FROM = new Date().toISOString().slice(2, 10).replace(/-/g, '')
      const NAVITIA_API_KEY = this.$store.getters.api_key
      const NAVITIA_URL = `https://api.navitia.io/v1/coverage/fr-se/lines/` +
        `${this.line.id}/route_schedules?from_datetime=${NAVITIA_DATE_FROM}&items_per_schedule=25`

      let request = new Request(NAVITIA_URL)

      let headers = new Headers()
      headers.append('Authorization', NAVITIA_API_KEY)

      fetch(request, {headers: headers}).then(res => {
        res.json().then(data => {
          this.addLineStops(data.route_schedules[0].table.rows)
          this.loading = false
        })
      })
    },
    addLineStops: function (stops) {
      this.$store.dispatch('addLineStops', [this.line.id, stops])
    }
  }
}
</script>

<style>
  .avatar {
    transition: background-color .5s ease, border-color .5s ease;
  }
  .avatar span {
    width: 2em;
    height: 2em;
    line-height: 2em !important;
  }
</style>
