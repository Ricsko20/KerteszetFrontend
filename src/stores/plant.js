import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePlantStore = defineStore('plant', () => {
  const plants = ref([])
  const plantsApi = axios.create({
    baseURL: "http://localhost:3000/plants",
    headers: {
      "Content-Type": "application/json",
    }
  })

  const fetchPlants = async () => {
    try {
      const response = await plantsApi.get("/")
      plants.value = response.data;
    } catch (err) {
      console.log("Error", err.message);
    }
  }

  const postPlant = async (plant) => {
    try {
      const response = await plantsApi.post("/", plant)
      if(response.status == 201) {
        plants.value.push(response.data)
        console.log("Plant added!")
      }
      else {
        console.error("Unexpected response: ", response.status)
      }
    } catch (err) {
      console.log("Error", err.message);
    }
  }

  const updatePlant = async (id, updatedPlant) => {
    try {
      const response = await plantsApi.put(`/${id}`)
      if(response.status == 200) {
        const plantIndex = plants.value.findIndex((plant) => plant.id == id)
        if(plantIndex != -1) {
          plants.value[plantIndex] = response.data;
          console.log("Plant updated!")
        }
        else {
          console.error("Unexpected: ", response.status)
        }
      }
    } catch (err) {
      console.log("Error", err.message);  
    }
  }

  const deletePlant = async (id) => {
    try {
      const response = await plantsApi.delete(`/${id}`)
      if(response.status == 204) {
        plants.value = plants.value.filter(plant = plant.id != id)
      }
      else {
        console.log("Unexpected: ", response.status)
      }
    } catch (err) {
      console.log("Error", err.message);
    }
  }

  return {plants, fetchPlants, postPlant, updatePlant, deletePlant }
})