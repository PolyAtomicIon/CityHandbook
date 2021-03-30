<template>
    
    <div class="activities">
        <p class="text">Activities</p>
        <div class="activity_type">
            <span class="act-item"><activity-item colorStyle="first-color" blockName="Chai"/></span>
            <span class="act-item"><activity-item/></span>
            <span class="act-item"><activity-item/></span>
            <span class="act-item"><activity-item/></span>
            <span class="act-item"><activity-item/></span>
            <span class="act-item"><activity-item/></span>
            <span class="act-item"><activity-item/></span>
            <span class="act-item"><activity-item/></span>
            <span class="act-item"><activity-item/></span>
        </div>
    </div>

</template>


<script>
import ActivityItem from './items/ActivityItem.vue'

export default {
  components: {
    ActivityItem
  }
}
</script>

<style scoped>
    .activities{
        background-color: #c0c0c0 ;
    }
    .activity_type{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .text{
        text-align: center;
        font-family: 'Oleo Script', cursive;
        font-size: 24px;
        font-weight: bold;
    }
    .act-item{
        padding: 1rem;
    }
</style>