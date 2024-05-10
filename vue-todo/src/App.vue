<template>
  <nav>
    <!--쿼리에 파라미터 넣기-->
    <!-- <RouterLink :to="{ name: 'home', query: {token: 'asdf' }}">Home</RouterLink> -->
    <!-- <RouterLink :to="{ name : 'home' }">Home</RouterLink> -->
    <RouterLink to="/login">로그인</RouterLink>
    <!--파싱할때 :to-->
    <RouterLink :to="`/user/${userId}`">유저 페이지</RouterLink>
    <!-- 
      Object로 표현 가능
      <RouterLink :to="{ path: '/login' }">로그인</RouterLink>
      <RouterLink :to="{ name: 'login' }">로그인</RouterLink> 
    -->
  </nav>
  <!--link의 view를 보여줌-->
  <RouterView/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style>
</style>
