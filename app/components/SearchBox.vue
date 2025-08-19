<script setup>
const router = useRouter()
const value = ref();
const debouncedValue = useDebounce(value, 500);

const searchKey = computed(() => `search-${debouncedValue.value}`);
const searchQuery = computed(() =>
  debouncedValue.value?.trim()?.length > 1 ? { q: debouncedValue.value, limit: 100 } : { q: undefined }
);

const { data, pending, error, refresh } = useApiFetch('/recipes/search',
  {
    key: searchKey,
    query: searchQuery,
    // watch: [debouncedValue],
    immediate: false,
    server: false,
    lazy: true,
    transform: (data) => {
      return {
        ...data,
        recipes: data?.recipes || []
      }
    }
  });


const recipes = computed(() => data.value?.recipes)

watch(debouncedValue, (newDebouncedValue) => {
  if (newDebouncedValue?.trim()?.length > 1) {
    refresh()
  } else {
    data.value = null
  }
})

</script>

<template>
  <div class="flex flex-col justify-center">


    <div class="card flex justify-center items-center">
      <InputText v-model="value" placeholder="Search Recipes" class="w-full max-w-[600px]" />
    </div>
    <div v-if="pending" class="mx-auto mt-10">pending...</div>
    <div v-else-if="error" class="mx-auto mt-10">error {{ error.message }}</div>
    <div v-else-if="recipes?.length === 0" class="mx-auto mt-10">no recipes</div>

    <div v-else
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-10 mt-12 mb-20">
      <FoodItem v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"
        @click="router.push(`/foods-list/${recipe.id}`)" />
    </div>
  </div>
</template>