<template>
  <div>
    <router-link :to="{ name: 'Home' }">Return Home</router-link>
  </div>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Enter poem title">
    <button @click="fetchPoems">Search</button>

    <div v-if="loading">
      Loading...
    </div>

    <div v-else-if="poems.length > 0">
      <h2>Popular Poems</h2>
      <Poem v-for="(poem, index) in poems" :key="index" :poem="poem" />
    </div>

    <div v-else>
      No poems found.
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Poem from '../components/PoemCard.vue'; 

export default {
  data() {
    return {
      searchQuery: '',
      poems: [],
      loading: false
    };
  },
  components: {
    Poem 
  },
  methods: {
    fetchPoems() {
      if (!this.searchQuery.trim()) {
        return;
      }
      this.loading = true;
      const baseUrl = 'https://poetrydb.org/';
      const searchUrl = `${baseUrl}title/${this.searchQuery}`;

      axios.get(searchUrl)
        .then(response => {
          this.poems = response.data.map(poemItem => ({
            title: poemItem.title,
            author: poemItem.author,
            lines: poemItem.lines
          }));
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
</style>
