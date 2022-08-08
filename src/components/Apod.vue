<template>
	<div class="container">
	    <div class="row">
	      <div class="col-md-12">
	        <div class="panel panel-primary">
	          <div class="panel-heading">
	            Günün Astronomi Fotoğrafı: <strong>{{APOD.title}}</strong>
	          </div>
	          <div class="panel-body">
	            <ul class="list-unstyled">
	              <li><strong>Fotoğrafı Çeken: </strong> {{APOD.copyright}}</li><br>
	              <li><strong>Tarih: </strong> {{APOD.date}}</li><br>
	              <li><strong>Açıklama: </strong> {{APOD.explanation}}</li><br>
	            </ul>
	            <router-link to="APOD.hdurl" :href="APOD.hdurl" target="_blank">
	              <img :src="APOD.url" class="apod-img img-responsive">
	            </router-link>
	          </div>
	          <div class="panel-footer">
	            <a class="btn btn-md btn-primary" :href="APOD.hdurl" target="_blank">Tam Halini Gör</a>
	          </div>
	        </div>
	      </div>
	    </div>
  	</div>
</template>

<script>
	export default {
		name: 'apod',
		props: [
			'APOD',
		]
	}
</script>

<style scoped>
  .apod-img {
    width: 100% !important;
    height: 70vh;
  }
</style>