<template>
    <div class="activity">
       <circle-item/>
       <activity-text-block/>
    </div>
</template>
<script>
import CircleItem from './CircleItem.vue'
import ActivityTextBlock from './ActivityTextBlock.vue'



export default {
  
  components: {
    CircleItem,
    ActivityTextBlock
  }
  
}
</script>
<style scoped>
    .activity{
        width: 70px;
        height: 110px;
        /* background-color: aqua; */
    }
    /deep/ .circle {
        background: #FFE352;
        height: 70px;
        width: 70px;
    }
</style>
