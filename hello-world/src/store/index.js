import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const mainPageModule = {
    // eslint-disable-next-line no-unused-vars
    state: () => ({
        Colors: [
            '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'
        ],
        currentColor: '',
        Sections: [],
    }),
    mutations: {
        setSections(state, data) {
            console.log("setting sections");
            state.Sections = data;
        },
        setCurrentColor(state, data) {
            state.currentColor = data;
        },
    },
    actions: {
        fetchSections({
            commit,
        }) {
            axios.get("https://next.json-generator.com/api/json/get/4kQH56oEq")
                .then(
                    response => {
                        console.log(response.data);
                        commit("setSections", response.data);
                    }
                );
        },
        
    },
    getters: {
        Sections(state) {
            return state.Sections;
        },
        Colors(state) {
            return state.Colors;
        },
        currentColor(state) {
            return state.currentColor;
        }
    },
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        main: mainPageModule,
    }
});