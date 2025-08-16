<script setup>

const router = useRouter();

const handleSeeMorePizzaFoods = () => {
  return router.push('/pizza-foods-list');
}

</script>

<template>
  <div class="flex flex-col items-start justify-between border border-primary max-w-[560px] grow">
    <div class="w-full flex justify-between items-center">
      <div class="flex flex-col items-start justify-between">
        <span class="text-primary text-[15px]">with features</span>
      </div>

      <span class="text-quick-silver text-sm cursor-pointer hover:text-secondary transition-all duration-[250ms]"
        @click="handleSeeMorePizzaFoods">see all</span>
    </div>

    <PizzaCategoryFoodItem />
  </div>
</template>
