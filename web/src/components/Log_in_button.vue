<template>
    <div id="log">
      <button @click="login">Log in</button>
    </div>
</template>

<script lang="ts">
    // Composition API
    import { useAuth0 } from '@auth0/auth0-vue';
  
    export default {
      setup() {
        const auth0 = useAuth0();
  
        return {
          login() {
            auth0.loginWithRedirect();
          }
        };
      },
      name: "Log_in_button"
    };
  
    // Options API
</script>

<style>
    button {
        width: 180px;
        height: 70px;
        position: absolute;
        left: 1600px;
        top: 20px;
        border-radius: 10px;
        background-color: #fc5d8d;
        border: none;
        
        font-size: 24px;
        cursor: pointer;

        transition: .2s;
    }

    button:hover {
      transform: scale(1.1);
    }

    #log{
      height: 500px;
      position: relative;
    }
</style>