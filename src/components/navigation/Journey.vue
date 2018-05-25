<template>
  <v-list-group
    :prepend-icon="iconName"
    no-action
  >
    <v-list-tile slot="activator">
      <v-list-tile-content>
        <v-list-tile-title>{{ label }}
          <span class="grey--text hidden-sm-and-down">({{ journeyDurationFormat }})</span>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <div class="pb-3">
      <journey-section v-for="(section, index) in journey.sections" :section="section" :key="`section-${index}`"></journey-section>
    </div>
  </v-list-group>
</template>

<script>
import JourneySection from '@/components/navigation/JourneySection'

export default {
  props: ['journey'],
  components: { JourneySection },
  data () {
    return {
      icons: {
        'best': 'star_border',
        'rapid': 'fast_forward',
        'fastest': 'fast_forward',
        'non_pt_walk': 'directions_walk',
        'comfort': 'event_seat',
        'car': 'directions_car',
        'bike_in_pt': 'directions_bike',
        'non_pt_bike': 'directions_bike',
        'non_pt_bss': 'directions_bike'
      },
      labelNames: {
        'best': 'Best',
        'rapid': 'Fast',
        'fastest': 'Fastest',
        'non_pt_walk': 'Walking Only',
        'comfort': 'Comfortable',
        'car': 'By Car',
        'bike_in_pt': 'Biking',
        'non_pt_bike': 'Biking',
        'non_pt_bss': 'Bike Sharing'
      }
    }
  },
  computed: {
    iconName: function () {
      return this.icons[this.journey.type] || 'directions'
    },
    label: function () {
      return this.labelNames[this.journey.type] || 'Various'
    },
    journeyDurationFormat: function () {
      let date = new Date(null)
      date.setHours(0)
      date.setSeconds(this.journey.duration)

      return (
        (date.getHours() > 0 ? `${date.getHours()} hours ` : '') +
        (date.getMinutes() > 0 ? `${date.getMinutes()} minutes ` : '')
      )
    }
  }
}
</script>
