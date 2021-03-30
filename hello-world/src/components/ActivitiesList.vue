<template>
    
    <div class="activities">
        <p class="text">Activities</p>
        <div class="activity_type">
            <span
                v-for="section in Sections" 
                :key="section.index"  
                class="act-item"
            >
                <activity-item 
                    :colorStyle="Colors[section.index]"
                    :blockName="section.activityName"
                />
            </span>
        </div>
    </div>

</template>


<script>

import ActivityItem from './items/ActivityItem.vue'
import {mapGetters, mapActions} from 'vuex'


export default {

  created() {
    this.fetchSections();
  },

  components: {
    ActivityItem
  },
  computed: {
    ...mapGetters(['Colors', 'Sections']),
  },
  methods: {
    ...mapActions(['fetchSections']),
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