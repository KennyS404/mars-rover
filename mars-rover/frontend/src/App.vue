<template>
  <div id="app">
    <RoverInput />
  </div>
</template>

<script>
import RoverInput from './components/RoverInput.vue';

export default {
  name: 'App',
  components: {
    RoverInput
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
