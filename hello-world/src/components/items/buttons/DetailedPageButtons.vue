<template>
    <div class="buttons">
        <social-button-two-gis/>
        <social-button-instagram/>
        <button class="share">Share</button>
    </div>
</template>
<script>
import SocialButtonInstagram from '../social-buttons/SocialButtonInstagram.vue'
import SocialButtonTwoGis from '../social-buttons/SocialButtonTwoGis.vue'

export default {
  components: {
    SocialButtonInstagram,
    SocialButtonTwoGis
  }
}
</script>
<style scoped>
    .buttons{
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    .share{
        background-color: #1C25FF;
        font-family: 'Oleo Script';
        font-size: 24px;
        color: whitesmoke;
        width: 135px;
    }
    /deep/button{
        width: 60px;
        height: 60px;
    }
</style>