<template>

    <div 
      class="activity" 
      @click="navigateToSection"
    >
        <circle-item 
          :style="'background-color: ' + colorStyle"
        />
        <div class="text-block">
        <span class="text-block-name green"> {{blockName}} </span>
        </div>
    </div>
    
</template>

<script>
import { mapMutations } from 'vuex'
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
    ...mapMutations(['setCurrentColor']),

    navigateToSection(){
      this.$router.push({ 
          name: 'sections', 
          query: { 
              headername: this.blockName
          },
      });
      this.setCurrentColor(this.colorStyle);
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
