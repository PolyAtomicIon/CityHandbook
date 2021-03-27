<template>
    
    <div class="header">

        <font-awesome-icon class="arrow-left" icon="long-arrow-alt-left" />
        
        <span class="header-name" > {{ headerName }} </span>

    </div>

</template>

<script>

export default {
  data: function () {
        return {
        }
    },
    props: {
        headerName: {
            default: 'Sport'
        }
    }
}
</script>

<style scoped>
    .header {
        background: #C0C0C0;
        display: flex;
        align-items: center;
        padding: 5px;
    }
    .header-name{
        margin: 0 auto;
        font-size: 24px;
        font-family: 'Oleo Script', cursive;
    }
    .arrow-left {
        font-size: 24px;
    } 
</style>