<template>
    <div class="info">
        <section-header
          headerName="Football"
        />
        <div class="body">
          <detailed-page-buttons/>
          <picture-item/> 
          <definition-item/>
        </div>
        
    </div>
</template>

<script>
import DetailedPageButtons from '../components/items/buttons/DetailedPageButtons.vue'
import PictureItem from '../components/items/PictureItem.vue'
import DefinitionItem from '../components/items/DefinitionItem.vue'
import SectionHeader from '../components/headers/SectionHeader.vue'


export default {
  components: {
    SectionHeader,
    DetailedPageButtons,
    PictureItem,
    DefinitionItem
  }
}
</script>

<style scoped>
  .body {
    margin: 35px 25px;
    
  }
</style>