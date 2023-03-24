<script setup>
import Clock from '../components/Clock.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>

  <main>
    <div class="wrapper">
      <nav> 
        <RouterLink to="/Settings">Settings ⚙️</RouterLink>
      </nav> 
      <Clock msg="asdasdss" title="asdasdhtthr" amg = "amg"/>
    </div>
  </main>
</template>
