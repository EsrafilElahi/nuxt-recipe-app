<script setup>
const router = useRouter();

const { data, pending, error } = useApiFetch('/recipes/tag/Asian', {
  key: 'recipes-asian-list',
  query: {
    limit: 100
  }
});

const asianRecipesList = computed(() => data.value?.recipes)

watchEffect(() => {
  if (data.value) {
    console.log('Asian recipes data:', data.value);
  }
});


const handleClick = (foodID) => {
  router.push(`/foods-list/${foodID}`)
}

</script>

<template>
  <div v-if="pending" class="flex justify-center items-center">pending...</div>
  <div v-else-if="error" class="flex justify-center items-center">error :
    {{ error.message }}</div>

  <div v-else class="grid grid-cols-7 gap-10">
    <FoodItem v-for="recipe in asianRecipesList" :key="recipe.id" :recipe="recipe"
      @click="() => handleClick(recipe.id)" />
  </div>
</template>
