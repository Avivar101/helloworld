<template>
  <div id="app">
    <app-header />
    <home />  
    <Admin />
  </div>
</template>

<script>
import HeadNav from './components/HeadNav'
import home from './components/home'
//import Menu from './components/menu'
import Admin from './components/Admin'

export default {
  name: 'App',
  components: {
    appHeader: HeadNav,
    home,
    //Menu,
    Admin
  }
}
</script>

<style>

</style>
