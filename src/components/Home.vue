<template>
  <div class="container">
    <h1>Lyon Transit</h1>
    <section>
      <input type="text" placeholder="Départ"/>
      <input type="text" placeholder="Arrivée"/>
      <button>Rechercher</button>
      <br />
    </section>
    <hr />
    <section>
      <h2><router-link to="/aroundme">Autour de moi</router-link></h2>
    </section>
    <hr />
    <section>
      <h2><router-link to="/myaddresses">Mes Adresses</router-link></h2>
      <ul>
        <li>Maison</li>
        <li>Travail</li>
      </ul>
      <router-link to="/myaddresses">Ajouter</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
section {
  padding: 15px 0;
}
input {
  display: block;
  margin: 10px 0;
  width: 100%;
  font-size: larger;
}
button {
  float: right;
  font-size: larger;
}
</style>
