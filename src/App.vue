<template>
  <div id="app">
    <v-app id="navapp">
      <v-toolbar flat extended color="primary">
      </v-toolbar>
      <v-layout row pb-2 class="mb-5">
        <v-flex xs8 offset-xs2  class="mb-3">
          <v-card class="card--flex-toolbar">
            <v-toolbar card prominent>
              <v-toolbar-title>
                <v-breadcrumbs>
                  <v-icon slot="divider">chevron_right</v-icon>
                  <v-breadcrumbs-item to="/">Lyon Navigation</v-breadcrumbs-item>
                  <v-breadcrumbs-item v-if="currentPage">{{ currentPage }}</v-breadcrumbs-item>
                </v-breadcrumbs>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <router-view class="pa-4"></router-view>
          </v-card>
        </v-flex>
      </v-layout>
      <bottom-nav-bar></bottom-nav-bar>
    </v-app>
  </div>
</template>

<script>
import BottomNavBar from '@/components/BottomNavBar'

export default {
  name: 'App',
  components: { BottomNavBar },
  computed: {
    currentPage: function () {
      const pagesName = {
        aroundme: 'Around Me',
        myaddresses: 'My Addresses'
      }

      let page = this.$route.path.substring(1)

      return page ? pagesName[page] : false
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
.card--flex-toolbar {
  margin-top: -64px;
}
</style>
