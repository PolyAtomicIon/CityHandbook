<template>

    <div class="text-block">
        <span class="text-block-name green"> {{blockName}} </span>
        <span class="text-block-value"> {{blockValue}} </span>
    </div>

</template>

<script>

export default {

    data: function () {
        return {
        }
    },
    props: {
        blockName: {
            default: 'Date'
        }
        ,
        blockValue: {
            default: 'City'
        }
    }

}
</script>

<style scoped>
    .text-block {
        /* background: green; */
        font-family: 'Oleo Script', cursive;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
    }

    .text-block .text-block-name {
        font-weight: bold;
        margin-right: 10px;
    }

</style>