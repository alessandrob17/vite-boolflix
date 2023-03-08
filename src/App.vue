<script >
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import store from '.store';
import axios from '.axios'

export default {
  components: {
    Main,
    Header
  },
  methods: {
    fetchData() {
      console.log('fetch data')
    },
    fetchMovies() {
      const url = this.store.config.BASE_URI + '/search/movie'


      axios.get(url,{
        params: {
          api_key: this.store.config.API_KEY,
          query: this.store.search
        }
      }).then(res=>{
        const { result } = res.data
        this.store.movies = results 
        console.log(this.sotre.moovies)
      }).catch(err={
        this.store.movies = []
      })
    }
  }
}
</script>

<template>
  <div>
    Prova
  </div>
</template>


<!-- STYLE -->
<style lang="scss"></style>
