<script setup>
import { ref } from 'vue'
import { usePlantStore } from '@/stores/plant';
import { useRouter } from 'vue-router';

const plantStore = usePlantStore()
const router = useRouter();
const plant = ref({
  id: 0,
  nev: "",
  evelo: false,
  kategoria: "",
  ar: 0,
})

const submitForm = async () => {
  try {
    if (plant.value.id) {
      await plantStore.updatePlant(plant.value.id, plant.value)
      alert("Plant updated")
      router.push("/")
    } else {
        console.log("Err")
    }
  } catch(err){
    console.error(err.message)
    alert("Failed to process request.")
  }
} 
</script>

<template>
  <div>
    <h2>Plant Info</h2>
    <form @submit.prevent="submitForm">
      <label>
        ID
        <input v-model.number="plant.id" type="number"  />
      </label>
      
      <label>
        Name
        <input v-model="plant.nev" type="text" />
      </label>

      <label>
        Perennial
        <input v-model="plant.evelo" type="checkbox" />
      </label>

      <label>
        Category
        <input v-model="plant.kategoria" type="text" />
      </label>

      <label>
        Price
        <input v-model.number="plant.ar" type="number"  />
      </label>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
  label, input{
    display: block;
  }
</style>