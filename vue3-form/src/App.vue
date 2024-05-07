<template>
  <!-- submit은 기본적으로 새로고침을 함 따라서 prevent로 막음-->
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="userId">아이디</label>
      <input id="userId" type="text" v-model="username">
    </div>
    <div>
      <label for="password">패스워드</label>
      <input id="password" type="text" v-model="password">
    </div>
    <button type="submit">로그인</button>
  </form>
  <br>
  <div>{{ data.name }}</div>
</template>
<script>
import axios from 'axios'
import { onMounted, reactive, ref }  from 'vue';

export default {
  // composition API
  setup() {
    // data
    const username = ref('')
    const password = ref('')
    let data = reactive({})

    // mount 된 후 호출
    onMounted(() => {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        Object.assign(data, response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
    })

    // methods
    const submitForm = () => {
      axios.post('https://jsonplaceholder.typicode.com/users/', {username: username.value, password: password.value})
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      console.log('제출되었습니다.')
    }

    return {
      username,
      password,
      data,
      submitForm
    }
  },
  methods: {
    // setup에 return된 값을 접근할 수 있음
    logText() {
      console.log(this.username)
    }
  }
}
</script>
<style>
  
</style>