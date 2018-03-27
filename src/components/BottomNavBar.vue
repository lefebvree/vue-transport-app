<template>
    <v-bottom-nav fixed :value="true" :active.sync="activePage">
      <router-link to="/">
        <v-btn flat color="blue" value="home">
          <span>Home</span>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/aroundme">
        <v-btn flat color="indigo" value="aroundme">
          <span>Around Me</span>
          <v-icon>place</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/myaddresses">
        <v-btn flat color="red" value="myaddresses">
          <span>My Addresses</span>
          <v-icon>favorite</v-icon>
        </v-btn>
      </router-link>
    </v-bottom-nav>
</template>

<script>
export default {
  name: 'BottomNavBar',
  computed: {
    activePage: function () {
      return this.$route.path.substring(1) || 'home'
    }
  }
}
</script>
