<template>
    <div class="poem-box">
        <h3>{{ poem.title }}</h3>
        <p>{{ poem.author }}</p>
        <p v-for="(line, index) in poem.lines" :key="index">{{ line }}</p>
    </div>
</template>

<script>
export default {
    props: ['poem'],
}
</script>

<style scoped>
.poem-box {
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    margin: 15px;
    width: calc(100% - 60px);
}
</style>