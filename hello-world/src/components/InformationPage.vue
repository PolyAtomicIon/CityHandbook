<template>
    <div class="info">
        <picture-item/>
    
        <definition-item/>
    </div>
</template>

<script>
import PictureItem from './items/PictureItem.vue'
import DefinitionItem from './items/DefinitionItem.vue'


export default {
  components: {
    PictureItem,
    DefinitionItem,
  }
}
</script>