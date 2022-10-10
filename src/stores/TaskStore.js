import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: "Milk", isFav: false },
            { id: 2, title: "Cookies", isFav: true }
        ]
    }),
    getters: {
        favs() {
            return this.tasks.filter(w => w.isFav);
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p;
            }, 0);
        },
        totalCount: (state) => {
            return state.tasks.length;
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(w => w.id !== id);
        },
        toggleFav(id) {
            const task = this.tasks.find(w => w.id === id);
            task.isFav = !task.isFav;
        }
    }
})