<template>
  <div>
    <div class="headline my-3">New Address</div>
    <v-layout row wrap>
      <v-flex xs12 md5 class="px-1">
        <v-text-field label="Name" v-model="name"></v-text-field>
      </v-flex>
      <v-flex xs12 md5 class="px-1">
        <v-text-field label="Address" v-model="address"></v-text-field>
      </v-flex>
      <v-flex xs12 md2 class="px-1">
        <v-btn color="primary" @click.native="createAddress">ADD</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script type = "text/javascript" >
export default {
  data () {
    return {
      name: '',
      address: ''
    }
  },
  methods: {
    createAddress: function () {
      if (this.name && this.address) {
        this.$store.dispatch('addAddress', {
          name: this.name,
          address: this.address,
          favorite: true
        })
        this.clear()
      }
    },
    clear: function () {
      this.name = ''
      this.address = ''
    }
  }
}
</script>
