<template> 

  <div class="wrapper">

    <section-header 
      :headerName="headerName"
    />
   
    <div class="cont">
      <div 
      v-for="sectionValue in sectionList"
      :key="sectionValue.section_name"
      class="item"
      >
        <sections-list :itemName="sectionValue.section_name" :itemDesc="sectionValue.section_info"/>
      </div>
    </div>
    
    
  </div>

</template>

<script>
import SectionHeader from '../components/headers/SectionHeader.vue'
import SectionsList from '../components/SectionsList.vue'
import axios from 'axios'

export default {
  data() {
    return {
      colorStyle: '',
      sectionList: null,
      headername: ''
    } 
  },
  
  components: {
    SectionHeader,
    SectionsList
  },
  created(){
        this.fetchSectionList();
        this.headerName = this.$route.query.headername;
    },

  methods: {
        fetchSectionList(){
            axios.get("https://next.json-generator.com/api/json/get/EJ4nmAjNc")
                .then(response => {
                    console.log(response.data); 
                    this.sectionList=response.data;
                    });
        }
       
    }


}
</script>

<style scoped>
  .wrapper {
    background:#C0C0C0;
  }
  
  .cont .item:first-child{
    margin-top: 0px;
  }
  .cont .item {
    margin-top: 25px;
  }
</style>