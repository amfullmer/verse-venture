<template>
  <header>
    <h1>Welcome to Verse Venture</h1>
  </header>
  <div class="links-container">
    <router-link :to="{ name: 'SearchAuthor' }">Search Poems by Author</router-link>
    &nbsp;&nbsp;&nbsp;
    <router-link :to="{ name: 'SearchTitle' }">Search Poems by Title</router-link>
  </div>
</template>
