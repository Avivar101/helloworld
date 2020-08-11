<template>
  <div id="app">
    <app-header />
    <home />  
    <Menu />
  </div>
</template>

<script>
import HeadNav from './components/HeadNav'
import home from './components/home'
import Menu from './components/menu'

export default {
  name: 'App',
  components: {
    appHeader: HeadNav,
    home,
    Menu
  }
}
</script>

<style>

</style>
