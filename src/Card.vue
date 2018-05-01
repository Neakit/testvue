<template>
	<div>
		<section v-if="errored">
		    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
		 </section>

		 <section v-else>
		    <div v-if="loading">Loading...</div>
			
				<p>Starship Name: {{ starship.name }}</p>
				<p>Starship Model: {{ starship.model }}</p>
				<p>Films count: {{ starship.films.length }}</p>
				<button v-on:click="addLike">Like</button>

		</section>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			starship: {},
			loading: true,
      		errored: false
		}
	},
	methods: {
		addLike: function(event) {
			alert('you liked this' + this.starship.name)
		}
	},
	filters: {
	    currencydecimal(value) {
	      return value.toFixed(2);
	    }
	  },
	mounted() {
		axios.get('https://swapi.co/api/starships/')
		.then(response => {
			this.starships = response.data; 
			// console.log(this.starships)
		})
		.catch(error => {
	        console.log(error);
	        this.errored = true;
	    })
	    .finally(() => (this.loading = false));
	}
}	
</script>

<style>
	
</style>