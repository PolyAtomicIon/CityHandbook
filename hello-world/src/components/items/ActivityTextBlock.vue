<template>

    <div class="text-block">
        <span class="text-block-name green"> {{blockName}} </span>
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
            default: 'Sport'
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
        text-align: center;
        padding-left: 8px;
    }

    .text-block .text-block-name {
        font-weight: bold;
        
    }

</style>