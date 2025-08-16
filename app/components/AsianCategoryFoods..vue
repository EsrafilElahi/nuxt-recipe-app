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

    <NuxtLink to="/about">
      <Card
        class="w-[200px] mt-7 rounded-[20px] shadow-[0px_5px_20px_3px_rgba(0,0,0,0.15)] hover:shadow-[0px_5px_20px_4px_rgba(0,0,0,0.20)] transition-shadow duration-[400ms]">
        <template #header>
          <img alt="food img" class="rounded-[20px]"
            src="https://thumbs.dreamstime.com/b/single-sushi-maki-above-salmon-avocado-white-background-image-focuses-structure-colors-ingredients-383015712.jpg" />
        </template>

        <template #content>
          <div class="flex justify-between items-end gap-3">
            <div>
              <h3 class="text-secondary text-[17px]">pizza food name</h3>
              <h6 class="text-quick-silver text-[14px]">dinner</h6>
            </div>

            <div class="bg-primary p-1 px-1.5 rounded-xl flex gap-1 items-center">
              <Icon name="lucide:star" size="12" class="text-white" />
              <span class="text-white font-bold text-[9px]">4.3</span>
            </div>
          </div>

        </template>
      </Card>
    </NuxtLink>
  </div>
</template>
