<script>
import { store } from "../store.js"


export default {
    components: {
    },
    data() {
        return {
            store
        };
    },
    methods: {

    },
    mounted: function () {
    }
}
</script>

<template>
    <div v-for="(elemento) in this.store.film_list.results ">
        <p>Titolo: {{ elemento.title }}</p>
        <p>Titolo originale: {{ elemento.original_title }}</p>
        <p>Lingua: {{ elemento.original_language }}</p>
        <p>Voto: {{ elemento.vote_average }}</p>
    </div>
</template>

<style scoped>
div {
    padding: 1rem;
}
</style>
