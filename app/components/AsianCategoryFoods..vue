<script setup>
const router = useRouter();
const limit = ref(5);

const { data, pending, error, refresh } = useApiFetch('/recipes', {
  key: 'recipes',
  query: computed(() => ({
    limit: limit.value
  })),

  // transform: (data) => {
  //   return {
  //     ...data,
  //     recipes: data?.recipes?.slice(0, 10)
  //   }
  // },
  // lazy: true,
  // server: false,
  // pick: ['recipes']
});

const recipes = computed(() => {
  return data?.value?.recipes || []
});

watch(recipes || data, (newData) => {
  console.log('newData :', newData)
})

const handleSeeMoreAsianFoods = () => {
  return router.push('/asian-foods-list');
}

</script>

<template>
  <div v-if="pending" class="w-full h-[318px] border rounded-lg flex justify-center items-center">pending...</div>
  <div v-else-if="error" class="w-full h-[318px] border rounded-lg flex justify-center items-center">error : {{
    error.message }}</div>

  <div v-else class="flex flex-col items-start justify-between">
    <div class="w-full flex justify-between items-center">
      <div class="flex flex-col items-start justify-between">
        <span v-capitalize class="text-secondary font-bold text-[20px]">asian recipes</span>
        <span class="text-primary text-[15px]">with features</span>
      </div>

      <span class="text-quick-silver text-sm cursor-pointer hover:text-secondary transition-all duration-[250ms]"
        @click="handleSeeMoreAsianFoods">
        see all</span>
    </div>

    <div class="w-full grid grid-cols-5 gap-10 mt-7 mb-20">
      <AsianCategoryFoodsItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>
