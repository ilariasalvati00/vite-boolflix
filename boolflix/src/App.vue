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
      })
    }
  },
  mounted: function () {
  }
}
</script>

<template>
  <input type="text" v-model="this.ricerca">
  <input type="button" value="Cerca" @click="search_film()">
  <FilmCard></FilmCard>
</template>

<style scoped></style>
