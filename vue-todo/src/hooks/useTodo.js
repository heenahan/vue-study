import { ref } from 'vue';  

const useTodo = () => {
    // data
    // ref : 뷰의 반응성을 주입해주는 API
    // 특징 1. 반드시 반환
    // 득징 2. .value로 접근
    const todoItems = ref([]);

    // methods
    function fetchTodos(){
        const result = [];
        for (let i = 0; i < localStorage.length; i++) {
            const todoItem = localStorage.key(i);
            result.push(todoItem);
        }
        return result;
    }

    const addItem = (todo) => {
        todoItems.value.push(todo);
        localStorage.setItem(todo, todo);
    }

    return {
        todoItems,
        addItem,
        fetchTodos
    }
}

export { useTodo };