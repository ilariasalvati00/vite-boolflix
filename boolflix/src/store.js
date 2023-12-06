import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=63edba95095db4a6d6413c4c294b0d11&query=",
    seriesUrl: "https://api.themoviedb.org/3/search/tv?api_key=63edba95095db4a6d6413c4c294b0d11&language=it_IT&query=",
    imgUrl: "https://image.tmdb.org/t/p",
    film_list: {},
    series_list: {},
    img_flag_list: ["cn", "de", "fi", "fr", "gb", "it", "jp", "kr", "no", "pt"]
});