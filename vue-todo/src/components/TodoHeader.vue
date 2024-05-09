<template>
    <h1>{{ appTitle }}</h1>
    <h4>{{ newTitle }}</h4>
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['appTitle'],
    // props는 디스트럭처링으로 받아올 시 리엑티비티를 사용할 수 없다. 
    // props ✅ { appTitle } ❌
    // 다만 context => { emit }으로 디스트럭처링할 수 있다.
    setup(props) {
        // computed API : API에서 받은 데이터를 가공할 때 연산 로직을 단순화 함
        const newTitle = computed(() => {
            return props.appTitle + ' - Vue 3'
        })
        return {
            newTitle
        }
    }
}
</script>

<style lang="scss" scoped>

</style>