<script setup>

import { usePlantStore } from '@/stores/plant';

const plantStore = usePlantStore();
plantStore.fetchPlants()

</script>

<template>
  <div>
    <h1>Plants</h1>
    <div class="row">
      <div class="card col-12 col-sm-6 col-md-5 col-lg-3" v-for="plant in plantStore.plants" :key="plant.id">
        <p class = "h2">{{ plant.nev }}</p>
        <div class="card-body">
          <p class = "h4">Évelő: {{ plant.evelo }}</p>
          <p class = "h4">Kategória: {{ plant.kategoria }}</p>
          <p class = "h4"></p>
        </div>
        <div class="card-footer">
          <p class = "h5">Kategória: {{ plant.ar }}</p>
        </div>
      </div>
    </div>
  </div>
</template>