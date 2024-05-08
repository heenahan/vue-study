import { ref } from 'vue'

const useMessage = () => {
    const message = ref('Hello Vue.js!')
    const changeMessage = () => {
      message.value = 'Goodbye Vue.js!'
    }
    
    return {
        message, 
        changeMessage
    }
}

export { useMessage }