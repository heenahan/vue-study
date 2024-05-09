<template>
  <TodoHeader :appTitle="appTitle"/>  
  <TodoInput @add="addItem"/>
  <TodoList :todoItems="todoItems" @remove="removeItem"/>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList
  },
  // composition 스타일로 코드를 작성하기 위해 선언 setup()
  setup() {
    // data
    // ref : 뷰의 반응성을 주입해주는 API
    // 특징 1. 반드시 반환
    // 득징 2. .value로 접근
    const todoItems = ref([]);
    const appTitle = ref('Todo App');

    // methods
    const fetchTodos = () => {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
          const todoItem = localStorage.key(i);
          result.push(todoItem);
      }
      return result;
    }

    // 라이프 사이클 API와 같은 동작 - beforeCreate, created
    console.log('setup called');

    // 라이프 사이클 API - setup() 이후 호출
    onBeforeMount(() => {
      console.log('onBeforeMount called')
      todoItems.value = fetchTodos();
    })

    // 라이프 사이클 API - onBeforeMount() 이후 호출
    onMounted(() => {
      console.log('onMounted called')
    })

    // 라이프 사이클 API - 컴포넌트가 제거되기 직전 호출
    onUnmounted(() => {
      console.log('onUnmounted called')
    })

    const addItem = (todo) => {
      todoItems.value.push(todo);
      localStorage.setItem(todo, todo);
    }
    const removeItem = (item, index) => {
      todoItems.value.splice(index, 1);
      localStorage.removeItem(item);
    }
    return {
      todoItems, appTitle, addItem, removeItem
    }
  }
}
</script>

<style>
</style>
