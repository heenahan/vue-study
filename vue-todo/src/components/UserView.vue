<template> 
    <!--한 페이지 뒤로 감-->
    <div @click="$router.back()">
        Site
    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
export default {
    setup() {
        // url 정보 읽기
        const route = useRoute();
        const router = useRouter();
        
        return {
            route,
            router
        }
    }
}
</script>

<style lang="scss" scoped>

</style>