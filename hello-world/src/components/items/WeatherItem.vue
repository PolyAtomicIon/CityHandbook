<template>

    <div class="weather">

        <circle-item />
        <span>
            {{Weather}}
        </span>

    </div>

</template>

<script>
import CircleItem from './CircleItem.vue'
// import {mapGetters} from 'vuex';
import axios from "axios";

export default {
  data() {
    return{
        Weather: '',
    } 
  },
  created(){
      this.fetchWeather();
  },
  components: {
    CircleItem
  },
  computed: {
  },
  methods: {
      fetchWeather() {
          axios.get("https://next.json-generator.com/api/json/get/4yyncTsN5")
            .then(
                response => {
                    console.log(response.data);
                    this.Weather = response.data[0]["weather"];
                }
            );
      }
      
  }
}
</script>

<style scoped>
    .weather{
        /* background: green; */
        display: flex;
        align-items: center;
        padding: 5px;
        font-size: 24px;
    }

    .weather  > * {
        margin-right: 15px; 
    }

    /deep/ .circle {
        background: #FFE352;
        height: 50px;
        width: 50px;
    }

</style>