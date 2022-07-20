export const state = () => ({
    descriptions: [
        // {
        //     "text": "\n\nLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups",
        //     "index": 0,
        //     "logprobs": null,
        //     "finish_reason": "length"
        // },
        // {
        //     "text": "\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        //     "index": 0,
        //     "logprobs": null,
        //     "finish_reason": "length"
        // },
    ]
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