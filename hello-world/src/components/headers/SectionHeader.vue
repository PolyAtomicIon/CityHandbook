<template>
    
    <div class="section-header">

        <highlighter-horizontal 
        />

        <div class="header-bg">
            
            <div class="header">

                <button-back />
                
                <span class="header-name" > {{ headerName }} </span>

            </div>
        
        </div>

    </div>

</template>

<script>
import HighlighterHorizontal from '../items/highlighters/HighlighterHorizontal.vue'
import ButtonBack from '../items/buttons/ButtonBack.vue'

export default {
  data: function () {
        return {
        }
    },
    components: {
        HighlighterHorizontal,
        ButtonBack
    },
    props: {
        headerName: {
            default: 'Sport'
        },
    },
    computed: {
    }
}
</script>

<style scoped>
    .header-bg {
        padding: 25px 0;
        background: white;
    }
    .header {
        background: #C0C0C0;
        display: flex;
        align-items: center;
        padding: 10px;
    }
    .header-name{
        margin: 0 auto;
        font-size: 24px;
        font-family: 'Oleo Script', cursive;
    }
</style>