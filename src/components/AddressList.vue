<template>
  <div>
    <p>{{ addressesCountText }}</p>
    <div class='' v-for="address in addresses" :key="address.name">
      <address-item :address="address"></address-item>
    </div>
  </div>
</template>

<script type = "text/javascript" >
import AddressItem from './AddressItem'

export default {
  data () {
    return {
    }
  },
  computed: {
    addresses: function () {
      return this.$store.getters.addresses
    },
    addressesCount: function () {
      return this.addresses.length
    },
    addressesCountText: function () {
      return this.addressesCount + ' address' + (this.addressesCount > 1 ? 'es' : '')
    }
  },
  components: {
    AddressItem
  }
}
</script>

<style>
</style>
