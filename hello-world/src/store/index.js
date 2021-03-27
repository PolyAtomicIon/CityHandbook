import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const mainPageModule = {
    // eslint-disable-next-line no-unused-vars
    state: () => ({

        loaded: false,
        Sections: [{},
            {},
            {}
        ],

    }),
    mutations: {
        setSections(state, data) {
            console.log("setting sections");
            state.Sections = Array();

            data.forEach(section => {
                state.Sections.push(section);
            });

            state.loaded = true;
            console.log(state.Sections);
        },
    },
    actions: {
        fetchSections({
            commit,
            state
        }) {
            axios.get("/api/sections")
                .then(
                    response => {
                        console.log(response.data);
                        commit("setSections", response.data["sections"]);
                    }
                );
        },


    },
    getters: {
        isLoaded(state) {
            return state.loaded;
        },
        Sections(state) {
            return state.Sections;
        },
        Section(state) {
            return state.Section;
        },
        Weather() {
            return "+7/+9 C";
        }
    },
}

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        main: mainPageModule,
    }
});