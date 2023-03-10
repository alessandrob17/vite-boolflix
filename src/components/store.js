import { reactive } from 'vue';

const store = reactive({
    movies: [],
    tvseries: [],
    search: '',
    API_KEY: 'd4493274b716747d584ced044c6f64e3',
    URI: 'https://developers.themoviedb.org/3'
})

export default store