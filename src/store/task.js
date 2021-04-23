export default {
    namespaced: true,
    state: () => ({
        tasks: []
    }),
    actions: {
        async getTasks(ctx) {
            const res = await fetch('https://jsonplaceholder.cypress.io/todos/')
            let tasks = await res.json()
            tasks = tasks.map(task => {
                const {id, completed, title} = task
                return {id, completed, title}
            })
            ctx.commit('setTasks', tasks)
        }
    },
    mutations: {
        addTask: (state, payload) => state.tasks.push(payload),
        setTasks: (state, payload) => state.tasks = payload,
        deleteTask: (state, id) => state.tasks = state.tasks.filter(task => {
            return task.id !== id
        }),
    },
    getters: {
        getTasks: state => state.tasks
    }
}
