<template>
  <div>      
    <b-jumbotron header="STARWARS" lead="Starwars university info" >
      <p>You can find information about starwars university below</p>
      <b-btn variant="primary" href="http://localhost:8080/#/Starships">Starships</b-btn>
      <b-btn variant="primary" href="#">Planets</b-btn>
      <b-btn variant="primary" href="#">People</b-btn>
    </b-jumbotron>      
  </div>      
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    
  }
}
</script>

<style>

</style>
