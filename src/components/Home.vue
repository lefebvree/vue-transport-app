<template>
  <div>
    <navigation-search></navigation-search>

    <journeys-list></journeys-list>

    <v-divider class="my-3"></v-divider>

    <v-layout row justify-center align-center>
      <v-flex xs12 md9>
        <v-layout reverse row justify-space-around wrap>
          <v-btn large round outline color="teal" to="/lines">
            <v-icon class="mr-3">departure_board</v-icon>
            <span>TCL Lines</span>
          </v-btn>
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
import AddressList from '@/components/addresses/AddressList'
import NavigationSearch from '@/components/navigation/NavigationSearch'
import JourneysList from '@/components/navigation/JourneysList'

export default {
  components: {
    AddressList,
    NavigationSearch,
    JourneysList
  }
}
</script>
