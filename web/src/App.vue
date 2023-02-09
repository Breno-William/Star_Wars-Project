<template>
  <div id="body">
    <logo/>
    <Log_in_button/>
  </div>  
</template>
<script lang="ts">
  import logo from "./components/logo.vue"
  import Log_in_button from "./components/Log_in_button.vue"



  export default {

    name: 'App',
    components: {
      logo,
      Log_in_button
      
    }
  }

</script>


<style scoped>
  #body {
    background-image: url("/img/tattoine.jpg");
    background-size: cover;
    height: 100vh;
    width: 100vw
  }
</style>