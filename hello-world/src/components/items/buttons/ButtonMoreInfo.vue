<template>

    <div class="more-info-btn" @click="$emit('click'); showDetails()">
        <button><font-awesome-icon class="arrow-right" icon="long-arrow-alt-right" /></button>
    </div>

</template>

<script>

export default ({
    
    methods: {
        showDetails() {
            
        }
    }
})
</script>


<style scoped>
    button {
        width: 40px;
        height: 40px;
        background: transparent;
        border: none;
        margin-top: 15px;
    }
    .arrow-right {
        font-size: 24px;
    }
</style>