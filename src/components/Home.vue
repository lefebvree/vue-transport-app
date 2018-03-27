<template>
  <div>
    <v-layout row wrap>
      <v-flex md5 xs12><v-text-field label="Departure"/></v-flex>

      <v-flex hidden-sm-and-down xs2 mt-3 text-xs-center>
        <v-icon large color="primary">flight_takeoff</v-icon>
      </v-flex>

      <v-flex md5 xs12><v-text-field label="Arrival"/></v-flex>
    </v-layout>
    <v-layout row justify-center align-center>
      <v-btn color="primary" large>
        <v-icon class="mr-3">search</v-icon>
        SEARCH
      </v-btn>
    </v-layout>

    <v-divider class="my-3"></v-divider>

    <v-layout row justify-center align-center>
      <v-flex xs12 md8>
        <v-layout reverse row justify-space-around wrap>
          <v-btn large round outline color="indigo" to="/aroundme">
            <v-icon class="mr-3">place</v-icon>
            <span>Around Me</span>
          </v-btn>
          <v-btn large round outline color="red" to="/myaddresses">
            <v-icon class="mr-3">favorite</v-icon>
            <span>My Addresses</span>
          </v-btn>
        </v-layout>

        <address-list></address-list>
        <div>
          <v-btn outline color="primary" to="/myaddresses" class="ma-2">Ajouter</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AddressList from '@/components/AddressList'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    AddressList
  }
}
</script>
