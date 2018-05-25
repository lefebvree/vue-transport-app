<template>
  <div v-if="journeys.length" class="mt-4">
    <v-toolbar flat color="primary" dark dense>
      <v-toolbar-title class="hidden-sm-and-down">Directions</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ this.journeys.length }} journeys</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <journey
        v-for="(journey, index) in journeys"
        :key="`journey-${index}`"
        :journey="journey"
      >
      </journey>
    </v-list>
  </div>
</template>

<script>
import Journey from '@/components/navigation/Journey'

export default {
  components: { Journey },
  computed: {
    journeys: function () {
      return this.$store.getters.journeys
    }
  }
}
</script>
