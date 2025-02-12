<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <nav class="text-center">
      <RouterLink class = "btn btn-outline-success m-2" to="/">Plants</RouterLink>
      <RouterLink class = "btn btn-outline-success m-2" to="/post">Post</RouterLink>
      <RouterLink class = "btn btn-outline-success m-2" to="/update">Update</RouterLink>
      <RouterLink class = "btn btn-outline-success m-2" to="/delete">Delete</RouterLink>
    </nav>
    <RouterView/>
  </div>
</template>