<template>
    <div class="def">
        <p>{{ definition }}</p>
        
    </div>
</template>
<script>
export default {
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
</style>