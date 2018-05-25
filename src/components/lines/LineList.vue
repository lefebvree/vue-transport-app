<template>
  <div>
    <v-layout row wrap justify-space-between class="my-3">
      <span class="headline my-1">TCL Lines</span>
      <v-chip flat color="teal lighten-1" text-color="white" medium>
        <v-avatar class="teal">
          {{ linesCount }}
        </v-avatar>
        TCL lines
      </v-chip>
    </v-layout>
    <v-layout row wrap justify-center mb-4>
      <v-flex lg6 md8 xs12>
        <v-text-field v-model="search" append-icon="search" single-line solo placeholder="Search..."></v-text-field>
      </v-flex>
    </v-layout>
    <v-list two-line>
      <v-list-tile v-if="loading" >
        <v-progress-linear :indeterminate="true" height="3"></v-progress-linear>
      </v-list-tile>
      <line-item v-for="line in linesSearch" :key="line.id" :line="line" avatar></line-item>
    </v-list>
  </div>
</template>

<script type = "text/javascript" >
import LineItem from '@/components/lines/LineItem'

export default {
  created: function () {
    if (!this.linesCount) this.queryLines()
  },
  data: function () {
    return {
      loading: false,
      search: ''
    }
  },
  methods: {
    queryLines: function () {
      this.loading = true

      const TCL_LINES_MAX = 500
      const NAVITIA_URL = `https://api.navitia.io/v1/coverage/fr-se/networks/network%3Atcl/lines?count=${TCL_LINES_MAX}`
      const NAVITIA_API_KEY = this.$store.getters.api_key

      let request = new Request(NAVITIA_URL)

      let headers = new Headers()
      headers.append('Authorization', NAVITIA_API_KEY)

      fetch(request, {headers: headers}).then(res => {
        res.json().then(data => {
          this.loading = false
          data.lines.map(this.addLine)
        })
      })
    },
    addLine: function (line) {
      this.$store.dispatch('addLine', {
        code: line.code,
        name: line.name,
        id: line.id
      })
    }
  },
  computed: {
    lines: function () {
      return this.$store.getters.lines
    },
    linesSearch: function () {
      return this.lines.filter(line => line.name.toLowerCase().includes(this.search.toLowerCase()))
    },
    linesCount: function () {
      return this.linesSearch.length
    }
  },
  components: {
    LineItem
  }
}
</script>

<style>
  .avatar {
    font-weight: bold;
  }
</style>
