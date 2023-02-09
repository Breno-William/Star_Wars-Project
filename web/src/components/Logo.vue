<template>
    <div id="logo">
        <img id="image" src="/img/logo.png" alt="">
    </div>
</template>

<script lang="ts">
    export default {
        name: "Logo"
    }
</script>

<style scoped>
    #logo {
        /* background-color: red */
        position: relative;
    }

    #image {
        width: 700px;
        height: 700px;
        position: absolute;
        top: -80px;
        left: 100px;
        opacity: 0.7;
    }
</style>