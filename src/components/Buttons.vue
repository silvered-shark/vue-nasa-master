<template>
	<div class="container-fluid">
		<div class="row jumbotron">
			<div class="col-md-12 text-center">
				<router-link to="/" href="/" class="btn btn-md btn-primary">APOD</router-link>
				<router-link to="/asteroids" href="/asteroids" class="btn btn-md btn-primary">Asteroids - NeoWs</router-link>
				<router-link to="/" href="/" class="btn btn-md btn-primary">EPIC</router-link>
				<router-link to="" href="/" class="btn btn-md btn-primary">EONET</router-link>
				<router-link to="" href="/" class="btn btn-md btn-primary">Earth</router-link>
				<router-link to="" href="/" class="btn btn-md btn-primary">NIVL</router-link>
				<router-link to="" href="/" class="btn btn-md btn-primary">MRP</router-link>
				<router-link to="" href="/" class="btn btn-md btn-primary">Patents</router-link>
				<router-link to="" href="/" class="btn btn-md btn-primary">Sounds</router-link>
				<router-link to="" href="/" class="btn btn-md btn-primary">SSD / CNEOS</router-link>
				<router-link to="" href="/" class="btn btn-md btn-primary">Techport</router-link>
				<router-link to="" href="/" class="btn btn-md btn-primary">VMMTW</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'buttons'
	}
</script>

<style scoped>
	.jumbotron {
		background-color: #fff;
	}
</style>