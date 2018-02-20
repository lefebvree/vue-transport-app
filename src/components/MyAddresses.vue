<template>
  <div id="myaddresses">
    <router-link to="/" class="home-link">Accueil</router-link>
    <h1>Mes adresses</h1>
    <address-list></address-list>
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
