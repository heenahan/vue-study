<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage">메시지 변경</button>
  </div>
</template>
<script>
import { useMessage } from './hooks/useMessage';

export default {
  setup() {
    const { message, changeMessage } = useMessage();

    return {
      message,
      changeMessage
    }
  }
}
</script>
<style>
  
</style>