const { createApp } = Vue;

createApp({
    data() {
        
        return {
            newTodo : '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
            
        }
    },
    methods:{
        removeTodo(todoindex){
            console.log('clicco')
            this.todos.splice(todoindex, 1)
        },
        addTodo(newTodo){
            this.todos.unshift(this.newTodo)
            this.newTodo = ''
        }
    },
    mounted() {
        console.log("vue è ok")
    }
}).mount('#app')