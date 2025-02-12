<script setup>
import {ref} from 'vue'
import { usePlantStore } from '@/stores/plant';

const plantStore = usePlantStore()

const plant = ref({
  id: 0,
  nev: "",
  evelo_e: "",
  kategoria: "",
  ar: 0
})

const submitForm = async () => {
  try {
    await plantStore.postPlant(plant.value)
    alert("Plant added")
  } catch(err) {
    console.error(err.message)
    alert("Failed to add plant!")
  }
}
</script>

<template>
  <div>
    <h2>Plant Information</h2>
    <form @submit.prevent="submitForm">
      <label>
        Name
        <input v-model = "plant.nev" type="text" required>
      </label>

      <label>
        Perennial
        <input v-model = "plant.evelo_e" type="checkbox">
      </label>

      <label>
        Category
        <input v-model = "plant.kategoria" type="text" required>
      </label>

      <label>
        Price
        <input v-model = "plant.ar" type="number" required>
      </label>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
h2, label, button {
  display: block;
  margin-left: 40px;
  margin-bottom: 10px;
}

button {
  margin-top: 30px;
}
</style>
