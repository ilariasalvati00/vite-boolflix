<script>
import axios from 'axios'
import { store } from './store.js'
import FilmCard from './components/FilmCard.vue'


export default {
  components: {
    FilmCard
  },
  data() {
    return {
      store,
      ricerca: ""
    };
  },
  methods: {
    search_film: function () {
      axios.get(this.store.apiUrl + encodeURI(this.ricerca)).then((risposta) => {
        this.store.film_list = risposta.data
        console.log(risposta.data)
      })
    },

    search_serietv: function () {
      axios.get(this.store.seriesUrl + encodeURI(this.ricerca)).then((risposta) => {
        this.store.series_list = risposta.data
        console.log(risposta.data)
      })
    },
    search: function () {
      this.search_film();
      this.search_serietv();
    }
  },
  mounted: function () {
  }
}
</script>

<template>
  <input type="text" v-model="this.ricerca" @keyup.enter="search()">
  <input type="button" value="Cerca" @click="search()">
  <FilmCard></FilmCard>
</template>

<style scoped></style>
