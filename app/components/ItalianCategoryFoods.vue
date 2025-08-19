<script setup>
const router = useRouter();

const { data, pending, error, refresh } = useApiAsyncData('/recipes/tag/Italian', 'recipes-italian-6', {
  fetchOptions: {
    query: {
      limit: 5
    }
  },

  asyncDataOptions: {
    revalidate: 30000,
    transform: (data) => {

      if (!data) {
        return {
          recipes: []
        }
      }
      return {
        ...data,
        recipes: data.recipes || []
      }
    },

  }
});


const recipes = computed(() => data.value?.recipes || [])

watchEffect(() => {
  if (data.value) {
    console.log('dataaaaaa :', data.value)
  }
})

const handleSeeMoreItlianFoods = () => {
  return router.push('/italian-foods-list');
}

</script>

<template>
  <div v-if="pending">pending...</div>
  <div v-else-if="error">pending {{ error.message }}</div>

  <div v-else class="flex flex-col items-start justify-between max-w-[100%] xl:max-w-[560px] grow xl:mb-[70px]">
    <div class="w-full flex justify-between items-center">
      <div class="flex flex-col items-start justify-between">
        <span v-capitalize class="text-secondary font-bold text-[20px]">italian recipes</span>
        <span class="text-primary text-[15px]">with features</span>
      </div>

      <span class="text-quick-silver text-sm cursor-pointer hover:text-secondary transition-all duration-[250ms]"
        @click="handleSeeMoreItlianFoods">see all</span>
    </div>

    <ItalianCategoryFoodItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
  </div>
</template>
