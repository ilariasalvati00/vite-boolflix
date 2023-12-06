<script>
import { store } from "../store.js"


export default {
    components: {
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        getlocandina: function (img) {
            return new URL(`${this.store.imgUrl}/w185${img}`, import.meta.url).href;
        },
        getimage: function (img) {
            return new URL(`../assets/${img}.png`, import.meta.url).href;
        },
        findimage: function (imgname) {
            for (let i = 0; i < this.store.img_flag_list.length; i++) {
                if (this.store.img_flag_list[i] == imgname) {
                    return true
                }
            }
            return false
        },
        check_img_poster: function (img) {
            if (img == "null") {
                return false;
            }
            else {
                return true;
            }
        }
    },
    mounted: function () {
    }
}
</script>

<template>
    <div v-for="(elemento) in this.store.film_list.results ">
        <div v-if="check_img_poster(elemento.poster_path)">
            <img :src="getlocandina(elemento.poster_path)" alt="">
        </div>
        <p>Titolo: {{ elemento.title }}</p>
        <p>Titolo originale: {{ elemento.original_title }}</p>
        <img v-if="findimage(elemento.original_language)" :src="getimage(elemento.original_language)" alt="">
        <p>Voto: {{ Math.ceil(elemento.vote_average * 5 / 10) }}</p>
    </div>
    <div v-for="(elemento) in this.store.series_list.results ">
        <div v-if="check_img_poster(elemento.poster_path)">
            <img :src="getlocandina(elemento.poster_path)" alt="">
        </div>
        <p>Titolo: {{ elemento.name }}</p>
        <p>Titolo originale: {{ elemento.original_name }}</p>
        <img v-if="findimage(elemento.original_language)" :src="getimage(elemento.original_language)" alt="">
        <p>Voto: {{ Math.ceil(elemento.vote_average * 5 / 10) }}</p>
    </div>
</template>

<style scoped>
div {
    padding: 1rem;
}
</style>
