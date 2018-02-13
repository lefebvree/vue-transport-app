<template>
  <div>
    <div class='' v-for="address in addresses" :key="address.name">
      <address-item :address="address"></address-item>
    </div>
  </div>
</template>

<script type = "text/javascript" >
import AddressItem from './AddressItem'

export default {
  props: ['addresses'],
  data () {
    return {
    }
  },
  components: {
    AddressItem
  }
}
</script>

<style>
</style>
