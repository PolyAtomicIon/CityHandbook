<template>

    <div class="weather">

        <circle-item />
        <span>
            + 7 / +8 C
        </span>

    </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CircleItem from './CircleItem.vue'

export default {
  components: {
    // HelloWorld,
    CircleItem
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