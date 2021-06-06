<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Home/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Home
  }
}
</script>
