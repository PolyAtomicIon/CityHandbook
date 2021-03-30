<template> 

  <div class="wrapper">

    <section-header />

    <sections-list />

    <div class="item"><sections-list itemName="Basketball" /></div>
    <div class="item"><sections-list itemName="Voleyball" /></div>
    <div class="item"><sections-list itemName="Tennis" /></div>
    <div class="item"><sections-list itemName="Swimming" /></div>
    
  </div>

</template>

<script>
import SectionHeader from '../components/headers/SectionHeader.vue'
import SectionsList from '../components/SectionsList.vue'

export default {
  components: {
    SectionHeader,
    SectionsList
  }
}
</script>

<style scoped>
  .wrapper {
    background:#C0C0C0;
  }
  
  .item {
    margin-top: 25px;
  }
</style>