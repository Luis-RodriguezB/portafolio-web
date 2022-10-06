<template>
  <router-view></router-view>
</template>


<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const body = document.body;
  body.classList.add('theme');
});
</script>