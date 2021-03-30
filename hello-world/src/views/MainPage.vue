<template> 

  <div class="wrapper">

    <main-page-header />

    <activities-list />
    
  </div>

</template>

<script>
import ActivitiesList from '../components/ActivitiesList.vue'
import MainPageHeader from '../components/headers/MainPageHeader.vue'

export default {
  components: {
    MainPageHeader,
    ActivitiesList
  }
}
</script>

<style scoped>
</style>