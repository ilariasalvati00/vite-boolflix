import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=63edba95095db4a6d6413c4c294b0d11&query=",
    film_list: {}
});