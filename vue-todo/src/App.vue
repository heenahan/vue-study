<template>
  <TodoHeader />  
  <TodoInput @add="addItem"/>
  <TodoList :todoItems="todoItems" @remove="removeItem"/>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import { ref } from 'vue'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList
  },
  setup() {
    // data
    const todoItems = ref([]);

    // methods
    const fetchTodos = () => {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
          const todoItem = localStorage.key(i);
          result.push(todoItem);
      }
      return result;
    }
    todoItems.value = fetchTodos();

    const addItem = (todo) => {
      todoItems.value.push(todo);
      localStorage.setItem(todo, todo);
    }
    const removeItem = (item, index) => {
      todoItems.value.splice(index, 1);
      localStorage.removeItem(item);
    }
    return {
      todoItems, addItem, removeItem
    }
  }
}
</script>

<style>
</style>
