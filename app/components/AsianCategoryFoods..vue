<script setup>
const router = useRouter();

const handleSeeMoreAsianFoods = () => {
  return router.push('/asian-foods-list');
}

</script>

<template>
  <div class="flex flex-col items-start justify-between border border-primary">
    <div class="w-full flex justify-between items-center">
      <div class="flex flex-col items-start justify-between">
        <span v-capitalize class="text-secondary font-bold text-[20px]">asian recipes</span>
        <span class="text-primary text-[15px]">with features</span>
      </div>

      <span class="text-quick-silver text-sm cursor-pointer hover:text-secondary transition-all duration-[250ms]"
        @click="handleSeeMoreAsianFoods">see
        all</span>
    </div>

    <AsianCategoryFoodsItem />
  </div>
</template>
