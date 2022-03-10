<template>
  <q-layout view="lHh Lpr lFf" id="lay-out">
    <router-view /> 
  </q-layout>
</template>

<script>
export default{
  data() {
    return {
    }
  },
}
</script>

<style>
#lay-out{
  overflow-x: auto;
  height: 100vh;
}
</style>
