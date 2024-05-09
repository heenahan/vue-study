<template>
    <ul>
        <li v-for="(item, index) in todoItems" :key="index">
            <span>{{ item }}</span>
            <button @click="removeTodo(item, index)">삭제</button>
        </li>
    </ul>
</template>

<script>
import { watch } from 'vue'

    export default {
        props: ['todoItems'],
        setup(props, { emit }) {
            const removeTodo = (item, index) => {
                emit('remove', item, index)
            }

            // 어떤 값이 변경이 될때마다 호출
            // watch는 지양 - 데이터 변경을 추적하기 어려움. 
            // 따라서 emit과 props를 사용해 명시적으로 소통하는 것을 권장
            watch((props.todoItems, (newValue) => {
                console.log({ newValue });
            }));
            return { removeTodo }
        }
    }
</script>

<style lang="scss" scoped>

</style>