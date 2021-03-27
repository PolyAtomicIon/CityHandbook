<template>
  <div id="app">
    <main-page-header />
    <!-- <activities-page/> -->
    <third-page />
  </div>
</template>

<script>
import MainPageHeader from './components/MainPageHeader.vue'
// import ActivitiesPage from  './components/ActivitiesPage.vue'
import ThirdPage from './ThirdPage.vue'

export default {
  name: 'App',
  components: {
    MainPageHeader,
    // ActivitiesPage,
    ThirdPage,
  }
}
</script>

<style>

</style>
