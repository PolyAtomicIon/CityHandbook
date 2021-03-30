<template> 
  <div class="wrapper">
  
    <main-page-header />
    <activities-page/>

  </div>
</template>

<script>
import MainPageHeader from '../components/MainPageHeader.vue'
import ActivitiesPage from '../components/ActivitiesPage.vue'


export default {
  components: {
    MainPageHeader,
    ActivitiesPage
  }
}
</script>

<style scoped>

  .wrapper {
      /* background: blue; */
  }

</style>