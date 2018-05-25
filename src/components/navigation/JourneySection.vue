<template>
  <v-list-tile class="my-2">
    <v-list-tile-content v-if="section.type !== 'waiting'">
      <v-list-tile-title>
        <v-icon class="mr-3 hidden-sm-and-down">{{ iconName }}</v-icon>
        <span class="hidden-sm-and-down">
          {{ section.from.name }} <v-icon>navigate_next</v-icon>
        </span>
        {{ section.to.name }}
      </v-list-tile-title>
      <v-list-tile-sub-title>
        <v-icon small class="mr-1 hidden-md-and-up">{{ iconName }}</v-icon>
        <span class="mx-4 hidden-sm-and-down"></span>
        {{ sectionDurationFormat }}
      </v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-content v-else>
      <v-list-tile-title class="py-2">
        <v-divider></v-divider>
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: ['section'],
  data () {
    return {
      icons: {
        'walking': 'directions_walking',
        'waiting': 'hourglass_empty',
        'public_transport': 'directions_transit',
        'street_network': 'directions_walk',
        'stay_in': 'hourglass_empty',
        'transfer': 'transfer_within_a_station',
        'crow_fly': 'directions_walk',
        'on_demand_transport': 'local_taxi',
        'bss_rent': 'directions_bike',
        'bss_put_back': 'directions_run',
        'boarding': 'flight_takeoff',
        'landing': 'flight_land'
      }
    }
  },
  computed: {
    iconName: function () {
      return this.icons[this.section.type] || 'directions'
    },
    sectionDurationFormat: function () {
      let date = new Date(null)
      date.setHours(0)
      date.setSeconds(this.section.duration)

      return (
        (date.getHours() > 0 ? `${date.getHours()} hours ` : '') +
        (date.getMinutes() > 0 ? `${date.getMinutes()} minutes ` : '')
      )
    }
  }
}
</script>
