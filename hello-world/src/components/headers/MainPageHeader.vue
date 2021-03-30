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
    methods: {
        //  fetch Date
        //  fetch City
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