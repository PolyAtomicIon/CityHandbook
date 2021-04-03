<template>
    <div class="info">
        <section-header
          :headerName="$route.query.sectionName"
        />
        <div class="body">
          <detailed-page-buttons/>

          <picture-item :imgValue="img"/> 
          <definition-item :definition="$route.query.sectionDesc"/>
     
        </div>
        
    </div>
</template>

<script>
import DetailedPageButtons from '../components/items/buttons/DetailedPageButtons.vue'
import PictureItem from '../components/items/PictureItem.vue'
import DefinitionItem from '../components/items/DefinitionItem.vue'
import SectionHeader from '../components/headers/SectionHeader.vue'
import axios from "axios"


export default {
  data() {
    return {
      img: null
    } 
  },
  components: {
    SectionHeader,
    DetailedPageButtons,
    PictureItem,
    DefinitionItem
  },
  created(){
        this.fetchImage();
    },
  methods: {
        fetchImage(){
            axios.get("https://next.json-generator.com/api/json/get/VJDdL0sVq")
                .then(response => {
                    this.img = response.data[0].img;
                    });
        }
    }
}
</script>

<style scoped>
  .body {
    margin: 35px 25px;
    
  }
</style>