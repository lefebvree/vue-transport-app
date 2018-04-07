<template>
  <div>
    <v-select
      :label="label" autocomplete
      :items="items" return-object
      :loading="loading"
      :search-input.sync="search"
      item-text="name" item-value="name"
      v-model="select"
    >
    </v-select>
  </div>
</template>

<script>
export default {
  props: ['label', 'storeProperty'],
  data () {
    return {
      search: null,
      loading: false,
      items: []
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
    }
  },
  methods: {
    querySelections: function (value) {
      this.loading = true

      const NAVITIA_URL = `http://api.navitia.io/v1/coverage/fr-se/places?q=${encodeURI(value)}`
      const NAVITIA_API_KEY = '25d05741-12ac-4d62-be88-2d82645310b9'

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
