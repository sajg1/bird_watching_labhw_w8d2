<template lang="html">
  <div class="">
    <h2>{{ sighting.species }}</h2>
    <p>{{ sighting.location }} on {{ sighting.date|format }}</p>

    <button v-on:click="deleteSighting">Delete Sighting</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import SightingsService from '@/services/SightingsService.js'

export default {
  name: 'sighting-card',
  props:['sighting', 'format'],
  methods: {
    deleteSighting() {
    	SightingsService.deleteSighting(this.sighting._id)
    	.then(() => eventBus.$emit('delete-sighting', this.sighting._id))
    }
  },
  filters: {
		format(value){
			return new Date(value).toLocaleString().substring(0, 10);
		}
	},
}
</script>

<style lang="css" scoped>
</style>
