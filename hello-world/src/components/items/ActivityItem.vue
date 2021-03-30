<template>

    <div class="activity" @click="navigateToSection">

       <circle-item/>
       
       <div class="text-block">
        <span class="text-block-name green"> {{blockName}} </span>
      </div>

    </div>
    
</template>

<script>
import CircleItem from './CircleItem.vue'

export default {

  props: {
      blockName: {
        default: 'Sport'
      },
      colorStyle: {
        default: 'yellow'
      }
    },
  
  components: {
    CircleItem
  },
  methods: {
    navigateToSection(){
      this.$router.push('sections')
    }
  }
}
</script>
<style scoped>
    .activity{
        width: 70px;
        height: 110px;
        /* background-color: aqua; */
    }
    .circle {
        border-radius: 50%;
        height: 70px;
        width: 70px;
    }
    .text-block {
        /* background: green; */
        font-family: 'Oleo Script', cursive;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
        text-align: center;
        padding-left: 8px;
    }

    .text-block .text-block-name {
        font-weight: bold;
        
    }
</style>
