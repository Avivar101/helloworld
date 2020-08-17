<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import HeadNav from './components/HeadNav'

export default {
  name: 'App',
  components: {
    appHeader: HeadNav,
  }
}
</script>

<style>

</style>
