<template>
  <v-card class="ma-2" color="grey lighten-5">
    <v-card-title class="pb-0">
      <v-icon class="mr-2">place</v-icon>
      <div class="display-1 text--darken-2 grey--text">{{ address.name }}</div>
    </v-card-title>
    <div class="subheader">
        {{ address.address }}
    </div>
    <v-card-actions class="pt-0">
      <v-spacer></v-spacer>
      <v-btn flat color="red" @click.native="deleteAddress">
        DELETE
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['address'],
  methods: {
    deleteAddress: function () {
      this.$store.dispatch('deleteAddress', this.address)
    }
  }
}
</script>
