<template>
	<div>
		<buttons></buttons>
		<div class="container">
			{{mesaj}}
		</div>
	</div>
</template>

<script>
import Buttons from "../Buttons"

	export default {
		name: 'asteroids',
		data() {
			return {
				mesaj: 'Hello Asteroids',
			}
		},
		components: {
			Buttons,
		}
	}
</script>