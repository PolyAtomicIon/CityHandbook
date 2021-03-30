<template>

    <div class="back-btn" @click="$router.go(-1)">
        <button><font-awesome-icon class="arrow-left" icon="long-arrow-alt-left" /></button>
    </div>

</template>

<style scoped>
    button {
        width: 40px;
        height: 40px;
        background: transparent;
        border: none;
    }
    .arrow-left {
        font-size: 24px;
    } 
</style>