<template lang="html">
	<div id="sightingsGrid">
		<div class="sighting" v-for="(sighting, index) in sightings" :key="index" :sighting="sighting">
			<h2>{{ sighting.species }}</h2>
			<p>{{ sighting.location }} on {{ sighting.date|format }}</p>

			<button>Delete Sighting</button>
		</div>
	</div>
</template>

<script>
import { eventBus } from '../main.js';
import SightingsService from '@/services/SightingsService.js';
export default {
	name: "sightings-grid",

	data(){
		return{
			sightings: []
		}
	},
	filters: {
		format(value){
			return new Date(value).toLocaleString().substring(0, 10);
		}
	},
	mounted(){
		SightingsService.getSightings()
		.then(sightings => this.sightings = sightings);

		eventBus.$on('sighting-added', sighting => this.sightings.push(sighting))
	},
	methods: {

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
