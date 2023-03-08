import { reactive } from 'vue';

const store = reactive({
    movies: [],
    tv: [],
    search: '',
    API_KEY: ''
})

export default store