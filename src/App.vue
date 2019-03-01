<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import webHeader from './components/web-header'
import webFooter from './components/web-footer'
import './assets/js/jquery/2.0.0/jquery.min.js'
import './assets/css/bootstrap/3.3.6/bootstrap.min.css'
import './assets/js/bootstrap/3.3.6/bootstrap.min.js'
export default {
  name: 'App',
  components: {
    'web-header': webHeader,
    'web-footer': webFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
