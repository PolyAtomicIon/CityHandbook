<template>
    
    <div class="wrapper">

        <div class="text-blocks">
            <text-block-item 
                blockName="Date"  
                :blockValue="DateValue"  
            />
            <text-block-item 
                blockName="City"  
                :blockValue="City"  
            />
        </div>

        <weather-item />

    </div>

</template>


<script>
import WeatherItem from '../items/WeatherItem.vue'
import TextBlockItem from '../items/TextBlockItem.vue'
import axios from 'axios'

export default {
  data() {
    return{
        City: '',
        DateValue: '',
    } 
  },
    components: {
        TextBlockItem,
        WeatherItem
    },
    created(){
        this.fetchDateAndCity();
    },
    methods: {
        fetchDateAndCity(){
            var current_date=new Date();
            axios.get("https://next.json-generator.com/api/json/get/4kyQZCiNc")
                .then(response => {
                    console.log(response.data); 
                    current_date =new Date(response.data[0].date), this.City = response.data[0 ].city
                    this.DateValue=current_date.getDate()+"."+current_date.getMonth()+"."+current_date.getFullYear();
                    });
            
        }
    }
}


</script>

<style scoped>
    .text-blocks{
        padding: 5px;
        margin: 10px 0px;
        display: flex;
        justify-content: space-between  ;
        align-items: center;
    }
</style>