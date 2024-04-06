<template>
  <div>
    <header>
      <h1>Welcome to Verse Venture</h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

body {
  font-family: "Merriweather", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  font-size: 1em;
  font-weight: 200;
}
</style>
