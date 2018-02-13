<template>
  <div>
    <router-link to="/" class="home-link">Accueil</router-link>
    <h1>Autour de moi</h1>
    <iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJW_vTuqLq9EcRziZRVNQAalU&key=AIzaSyC-h-aDy7zXGEF-6e6d0pNekdU_YRQnQXE" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'AroundMe',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .home-link {
    float: right;
  }
</style>
