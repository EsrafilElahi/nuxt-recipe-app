<script setup>

const props = defineProps(['recipe'])

</script>

<template>
  <NuxtLink :to="`/foods-list/${recipe.id}`">
    <div
      class="flex items-center justify-between gap-[20px] py-2 pl-2 pr-[30px] mt-10 w-[560px] shadow-[0px_5px_20px_3px_rgba(0,0,0,0.15)] hover:shadow-[0px_5px_20px_4px_rgba(0,0,0,0.20)] transition-shadow duration-[400ms] rounded-xl">
      <div class="flex-[35%]">
        <img :alt='recipe.name' :src="recipe.image" class="rounded-xl w-[180px] h-[100px] object-cover" />
      </div>

      <div class="flex-[50%]">
        <h2 v-capitalize class="text-secondary text-[18px] font-bold">{{ recipe.name }}</h2>
        <div class="flex gap-2.5 items-center justify-start mt-2">
          <Icon name="lucide:check-line" size="14" class="text-primary" />
          <div class="flex gap-3 whitespace-nowrap text-primary text-[13px] font-bold">
            Tags :
            <span class="whitespace-nowrap text-primary text-[13px] font-bold" v-for="tag in recipe?.tags">{{ tag
            }},</span>
          </div>
        </div>
      </div>

      <div class="flex-[auto] bg-primary p-1 px-1.5 rounded-md flex gap-1 items-center">
        <Icon name="lucide:star" size="12" class="text-white fill-primary-500 bg-white" />
        <span class="text-white font-bold text-[9px]">4.3</span>
      </div>
    </div>
  </NuxtLink>
</template>
