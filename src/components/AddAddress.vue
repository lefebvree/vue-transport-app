<template>
  <div>
    <p><input type="text" placeholder="Nom" v-model="name"></p>
    <p><input type="text" placeholder="Adresse" v-model="address"/></p>
    <button v-on:click="createAddress">Ajouter</button>
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
      this.$store.dispatch('addAddress', {
        name: this.name,
        address: this.address,
        favorite: true
      })
      this.clear()
    },
    clear: function () {
      this.name = ''
      this.address = ''
    }
  }
}
</script>

<style>
</style>
