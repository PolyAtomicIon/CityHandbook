<template>
    <div class="img">
        <img class="imgValue" :src="imgValue" alt="picture">
    </div>
</template>

<script>

export default {

    data: function () {
        return {
        }
    },
    props: {
        imgValue: {
            default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4bABAt-jPU7ZHShGJhWnPk3lGiorDt1ENw&usqp=CAU'
        }
    }

}
</script>

<style scoped>
    .imgValue{
        width: 310px;
        height: 142.14px;
        
    }
    .img{
        width: 310px;
        height: 142.14px;
        box-shadow: -5px 7px #c0c0c0;
        margin-bottom: 25px;
    }
</style>