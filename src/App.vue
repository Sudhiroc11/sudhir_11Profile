<template>
  <q-layout view="lHh Lpr lFf" id="lay-out">
    <notifications group="foo" position="top center" style="z-index: 10001" />
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
