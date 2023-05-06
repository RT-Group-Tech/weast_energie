import axios from 'axios';
//all states
const state = {
    baseURL: "http://weast-energie.com",
    optionAxios: {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    },
    projects: [],
    services: [],
    realisations: [],

    paginationProject: {
        currentPage: 1,
        pageSize: 6
    },

    paginationService: {
        current: 1,
        size: 4
    },

    paginationRealisation: {
        currentPage: 1,
        pageSize: 6
    }

};

//all getters
const getters = {
    getProjects(state, getters) {
        return state.projects.slice(getters.getProjectStart, getters.getProjectEnd)
    },
    getServices(state, getters) {
        return state.services.slice(getters.getServiceStart, getters.getServiceEnd)
    },

    getAllRealisations: state => state.realisations,

    //return realisation paginate
    getPaginateRealisations(state, getters) {
        return state.realisations.slice(getters.paginateRelStart, getters.paginateRelEnd)
    },

    paginateRelStart(state) {
        return (state.paginationRealisation.currentPage - 1) * state.paginationRealisation.pageSize
    },
    paginateRelEnd(state, getters) {
        return getters.paginateRelStart * state.paginationRealisation.pageSize
    },

    getAllServices: state => state.services,
    getAllProjects: state => state.projects,

    getProjectStart(state) {
        return (state.paginationProject.currentPage - 1) * state.paginationProject.pageSize
    },
    getProjectEnd(state, getters) {
        return getters.getProjectStart + state.paginationProject.pageSize
    },

    getServiceStart(state) {
        return (state.paginationService.current - 1) * state.paginationService.size
    },
    getServiceEnd(state, getters) {
        return getters.getServiceStart + state.paginationService.size
    },
};

//all mutations or setters
const mutations = {
    setServices: (state, data) => state.services = data,
    setProjects: (state, data) => state.projects = data,
    setRealisations: (state, data) => state.projects = data
};

//all actions or methods
const actions = {
    viewContent({ commit, state }) {
        try {
            axios.get(`${state.baseURL}/admin/contenus`)
                .then((result) => {
                    commit("setProjects", result.data.contenus.projets);
                    commit("setServices", result.data.contenus.services);

                })
                .catch(err => console.log(err));
        } catch (err) {
            console.log(err)
        }
    },

    viewAllRealisations({ commit, state }) {
        try {
            axios.get(`${state.baseURL}/admin/realisations/voir`)
                .then((result) => {
                    commit("setRealisations", result.data.realisations);
                })
                .catch(err => console.log(err));
        } catch (err) {
            console.log(err)
        }
    },

    prevProjects({ state }) {
        if (state.paginationProject.currentPage === 1) {
            return;
        } else {
            state.paginationProject.currentPage--;
        }

    },
    nextProjects({ state }) {
        if (state.paginationProject.currentPage >= state.projects.length / 6) {
            return;
        } else {
            state.paginationProject.currentPage++
        }
    },

    prevServices({ state }) {
        if (state.paginationService.current === 1) {
            return;
        } else {
            state.paginationService.current--
        }
    },
    nextServices({ state }) {
        if (state.paginationService.current >= state.services.length / 4) {
            return;
        } else {
            state.paginationService.current++
        }
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}