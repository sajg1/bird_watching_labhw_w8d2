<template lang="html">
	<div id="sightingsGrid">
		<sighting-card class="sighting" v-for="(sighting, index) in sightings" :key="index" :sighting="sighting" ></sighting-card>
	</div>
</template>

<script>
import { eventBus } from '../main.js';
import SightingsService from '@/services/SightingsService.js';
import SightingCard from './SightingCard.vue'

export default {
	name: "sightings-grid",
	data(){
		return{
			sightings: []
		}
	},

	mounted(){
		SightingsService.getSightings()
		.then(sightings => this.sightings = sightings);

		eventBus.$on('sighting-added', sighting => this.sightings.push(sighting))

		eventBus.$on('delete-sighting', (id) => {
			const index = this.sightings.findIndex(sighting => sighting._id === id)
			this.sightings.splice(index, 1);
		})
	},
	methods: {

	},
	components: {
		'sighting-card':SightingCard
	}
}
</script>

<style lang="css" scoped>
#sightingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

h2 {
	padding: 0;
	margin: 0;
}

.sighting {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #F55536;
}
</style>
