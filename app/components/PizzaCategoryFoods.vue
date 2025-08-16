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

    <NuxtLink to="/about">
      <div
        class="flex items-center justify-between gap-[20px] py-2 pl-2 pr-[30px] mt-10 w-[560px] shadow-[0px_5px_20px_3px_rgba(0,0,0,0.15)] hover:shadow-[0px_5px_20px_4px_rgba(0,0,0,0.20)] transition-shadow duration-[400ms] rounded-xl">
        <div class="flex-[35%]">
          <img alt="pizza img" class="rounded-xl w-[180px] h-[100px]"
            src="https://thumbs.dreamstime.com/b/single-sushi-maki-above-salmon-avocado-white-background-image-focuses-structure-colors-ingredients-383015712.jpg" />
        </div>

        <div class="flex-[50%]">
          <h2 v-capitalize class="text-secondary text-[18px] font-bold"> Mung Folan </h2>
          <div class="flex gap-2.5 items-center justify-start mt-2">
            <div class="border border-primary w-[18px] h-[18px] flex justify-center items-center rounded-full">
              <Icon name="lucide:check" size="14" class="text-primary" />
            </div>

            <span v-capitalize class="text-primary text-[13px] font-bold">asdd asdasdas ad ad</span>
          </div>
        </div>

        <div class="flex-[auto] bg-primary p-1 px-1.5 rounded-md flex gap-1 items-center">
          <Icon name="lucide:star" size="12" class="text-white fill-primary-500 bg-white" />
          <span class="text-white font-bold text-[9px]">4.3</span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
