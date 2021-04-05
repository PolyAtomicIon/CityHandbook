<template>
    <div class="def">
        <!-- <p>{{ definition }}</p> -->

        <text-highlight :queries="queries">{{ definition }}</text-highlight>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            queries: ['Lorem', 'consectetur'],
        };
    },
    props:{
        definition:{
            default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatem maiores aspernatur dolores ad quia, saepe ipsum sed distinctio rerum! Laborum velit numquam excepturi nobis veniam consequatur sunt, esse ab."
        }
    }
}
</script>
<style scoped>
    p{
        font-size: 20px;
    }   
    /deep/ .text__highlight {
        background-color: transparent;
        color: red;
        font-weight: bold;
    }
</style>