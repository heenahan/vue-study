<template>
    <div>
        <input type="text" v-model="todoInput">
        <button @click="addTodo">추가</button>
    </div>
</template>
<script>
import { ref } from "vue";

export default {
    setup(props, { emit }) {
        // data
        const todoInput = ref('');

        // methods
        const clearTodo = () => todoInput.value = '';
        const addTodo = () => {
            const todo = todoInput.value
            localStorage.setItem(todo, todo);
            emit('add', todo);
            clearTodo();
        }

        return {
            todoInput,
            addTodo
        }
    }
}
</script>
<style lang="">
    
</style>