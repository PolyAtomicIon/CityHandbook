<template>

    <div class="weather">

        <circle-item />
        <span>
            {{Weather}}
        </span>

    </div>

</template>

<script>
import CircleItem from './CircleItem.vue'
import {mapGetters} from 'vuex';

export default {
  components: {
    CircleItem
  },
  computed: {
      ...mapGetters(['Weather']),
  }
}
</script>

<style scoped>
    .weather{
        /* background: green; */
        display: flex;
        align-items: center;
        padding: 5px;
        font-size: 24px;
    }

    .weather  > * {
        margin-right: 15px; 
    }

    /deep/ .circle {
        background: #FFE352;
        height: 50px;
        width: 50px;
    }

</style>