<template>
  <div>
    <address-list></address-list>
    <v-divider class="my-4"></v-divider>
    <add-address></add-address>
  </div>
</template>

<script>
import AddressList from '@/components/AddressList'
import AddAddress from '@/components/AddAddress'

export default {
  name: 'MyAddresses',
  components: {
    AddressList,
    AddAddress
  }
}
</script>
