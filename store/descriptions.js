export const state = () => ({
    descriptions: []
})

export const mutations = {
    addDescriptions(state, descriptions) {
        state.descriptions = descriptions
    }
}

export const actions = {
    generateDescriptions({ commit }, payload) {
        this.$axios.post("/descriptions", payload).then(response => {
            const { choices } = response.data
            commit("addDescriptions", choices)
        }).catch(err => console.log(err))
    }
}