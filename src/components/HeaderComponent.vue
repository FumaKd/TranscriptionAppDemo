<script setup>
</script>

<template>
    <v-app-bar
        color="#BC671D"
    >
        <v-app-bar-nav-icon class="text-grey-lighten-2"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-grey-lighten-2" @click="$router.push({name: 'home'})">議事録アプリ</v-toolbar-title>
    </v-app-bar>
</template>

<style scoped></style>