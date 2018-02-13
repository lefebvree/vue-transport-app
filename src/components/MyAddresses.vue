<template>
  <div id="myaddresses">
    <h1>Mes adresses</h1>
    <address-list :addresses="addresses"></address-list>
  </div>
</template>

<script>
import AddressList from '@/components/AddressList'

export default {
  name: 'MyAddresses',
  components: {
    // Reference to the AddressList component
    AddressList
  },
  data () {
    return {
      addresses: [{
        name: 'Maison',
        address: '34 rue Bolivar, 69005, Lyon',
        favorite: true
      }, {
        name: 'Travail',
        address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
        favorite: true
      }, {
        name: 'Nautibus',
        address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
        favorite: false
      }, {
        name: 'AML',
        address: '43, bd du 11 novembre 1918, 69622 Villeurbanne cedex',
        favorite: false
      }]
    }
  }
}
</script>
