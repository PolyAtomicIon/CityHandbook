<template>
    
    <div class="section-item">
        
        <highlighter-vertical />

        <div class="item-info">
            <div class="item-name"> {{ itemName }} </div>
            <div class="item-desc"> {{ itemDesc }} </div>
        </div>

        <div class="buttons-pos">
            
            <div class="first-btn-pos"> <social-button-two-gis /> </div>
            
            <div class="sec-btn-pos">
                <social-button-instagram />
                <button-more-info />
            </div>

        </div>
        
    </div>

</template>

<script>
import HighlighterVertical from './items/highlighters/HighlighterVertical.vue'
import SocialButtonTwoGis from './items/social-buttons/SocialButtonTwoGis.vue'
import SocialButtonInstagram from './items/social-buttons/SocialButtonInstagram.vue'
import ButtonMoreInfo from './items/buttons/ButtonMoreInfo.vue'

export default {
    components: {
        HighlighterVertical,
        SocialButtonTwoGis,
        SocialButtonInstagram,
        ButtonMoreInfo
    },
    props: {
        itemName: {
            default: 'Football'
        },
        itemDesc: {
            default: 'lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
    }
}
</script>

<style scoped>
    .section-item {
        background: white;
        display: flex;
    }
    .item-info {
        width: 50%;
        padding: 15px;
        font-family: 'Oleo Script', cursive;
    }
    .item-name {
        font-size: 24px;
        padding-bottom: 10px;
    }
    .buttons-pos {
        width: 30%;
        padding: 15px;
        display: flex;
        justify-content: flex-end;
    }
    .first-btn-pos {
        margin-right: 15px;
    }
    .sec-btn-pos > button {
        display: block;
    }
</style>