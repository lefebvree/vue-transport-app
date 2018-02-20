<template>
  <div class='content'>
    <p>
      <strong>{{ address.name }}</strong>
      <em class='label'>
        :
      </em>
      <span class='desc'>
        {{ address.address }}
      </span>
    </p>
    <div>
      <button v-on:click="deleteAddress">Delete</button>
    </div>
  </div>
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
