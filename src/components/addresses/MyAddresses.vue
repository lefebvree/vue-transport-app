<template>
  <div>
    <address-list></address-list>
    <v-divider class="my-4"></v-divider>
    <add-address></add-address>
  </div>
</template>

<script>
import AddressList from '@/components/addresses/AddressList'
import AddAddress from '@/components/addresses/AddAddress'

export default {
  components: {
    AddressList,
    AddAddress
  }
}
</script>
