<template>
    
    <div class="wrapper">

        <div class="text-blocks">
            <text-block-item 
                blockName="Date"  
                blockValue="10.20.2021"  
            />
            <text-block-item 
                blockName="City"  
                blockValue="Almaty"  
            />
        </div>

        <weather-item />

    </div>

</template>


<script>
import WeatherItem from './items/WeatherItem.vue'
import TextBlockItem from './items/TextBlockItem.vue'

export default {
  components: {
    TextBlockItem,
    WeatherItem
  }
}
</script>

<style scoped>

    .wrapper {
        /* background: blue; */
    }

    .text-blocks{
        /* background: red; */
        padding: 5px;
        margin: 10px 0px;
        display: flex;
        justify-content: space-between  ;
        align-items: center;
    }

</style>