<template>
  <div class="address-list">
    <v-layout row wrap justify-space-between class="my-3">
      <span class="headline my-1">Favorites</span>
      <v-chip flat color="red lighten-1" text-color="white">
        <v-avatar class="red">
          {{addressesCount}}
        </v-avatar>
        {{ addressesCountText }}
      </v-chip>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 lg6 v-for="address in addresses" :key="address.name">
        <address-item :address="address"></address-item>
      </v-flex>
    </v-layout>
  </div>
</template>

<script type = "text/javascript" >
import AddressItem from '@/components/addresses/AddressItem'

export default {
  computed: {
    addresses: function () {
      return this.$store.getters.addresses
    },
    addressesCount: function () {
      return this.addresses.length
    },
    addressesCountText: function () {
      return 'address' + (this.addressesCount > 1 ? 'es' : '')
    }
  },
  components: {
    AddressItem
  }
}
</script>
