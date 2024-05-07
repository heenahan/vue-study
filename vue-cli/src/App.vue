<!-- 싱글 파일 컴포넌트 : 컴포넌트에 관련된 코드를 하나의 파일에서 관리 -->
<template>
  <AppHeader v-bind:appTitle="header" v-on:change="changeMessage"/>
  <hr>
  <div>
    {{ message }}
  </div>
  <!-- v-on:click 축약 @click-->
  <button @click="showAlert">경고</button>
</template>

<script>
  // import 컴포넌트 이름 from './컴포넌트 파일 경로'
  import AppHeader from './components/AppHeader.vue'

  export default {
    components: {
      // '컴포넌트 이름' : 컴포넌트 내용
      // 'AppHeader': AppHeader key와 value가 같으면 하나만 써도 됨
      AppHeader
    },
    data() {
      return {
        message: 'Hello Vue!',
        header: "App Header Component"
      }
    },
    methods: {
      showAlert() {
        alert('Hello Vue!')
      },
      changeMessage() {
        this.message = "Changed Message"
      }
    }
  }
</script>

<style scoped>

</style>