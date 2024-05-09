<template>
  <TodoHeader :appTitle="appTitle"/>  
  <TodoInput @add="addItem"/>
  <TodoList :todoItems="todoItems" @remove="removeItem"/>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import { useTodo } from './hooks/useTodo.js'
import { onBeforeMount, onMounted, onUnmounted } from 'vue'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList
  },
  data() {
    return {
      appTitle: 'TODO APP '
    }
  },
  // composition 스타일로 코드를 작성하기 위해 선언 setup()
  setup() {
    // component 해야할 일 중 세세한 구현은 별도의 파일로 분리하여 코드가 깔끔해짐
    const { todoItems, addItem, fetchTodos } = useTodo();

    // 라이프 사이클 API와 같은 동작 - beforeCreate, created
    console.log('setup called')

    // 라이프 사이클 API - setup() 이후 호출
    // 라이프 사이클 API를 사용하여 렌더링 전 데이터를 가져옴. 
    // 데이터를 가져오는 동작은 useTodo 내부가 아닌 setup에서 처리함
    onBeforeMount(() => {
      console.log('onBeforeMount called')
      fetchTodos();
    })

    // 라이프 사이클 API - onBeforeMount() 이후 호출
    onMounted(() => {
      console.log('onMounted called')
    })

    // 라이프 사이클 API - 컴포넌트가 제거되기 직전 호출
    onUnmounted(() => {
      console.log('onUnmounted called')
    })
  
    return {
      todoItems, addItem
    }
  },
  methods: {
    removeItem(item, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(item);
    }
  }
}
</script>

<style>
</style>
