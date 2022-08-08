<template>
  <div>
    <buttons></buttons>
    <apod :APOD="APOD"></apod>
  </div>
</template>

<script>
import Apod from './Apod'
import Buttons from './Buttons'

export default {
  name: 'home',
  data () {
    return {
      APOD: {},
    }
  },
  components: {
    Apod,
    Buttons
  },
  created() {
    this.fetchApod();
  },
  methods: {
    fetchApod() {
      let url = this.$options.API.URL;
      let key = this.$options.API.KEY;
      
      fetch(`${url}/planetary/apod?api_key=${key}`, {
        method: 'GET',
      }).then((resp) => {
        return resp.json();
      }).then((obj) => {
        this.APOD = obj;
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

