<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import SettingsPane from '../components/SettingsPane.vue';
</script>

<template>
  <div class="wrapper">
      <nav> 
        <RouterLink to="/">Timer⏰</RouterLink>
      </nav> 
      <br>
    <SettingsPane />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
