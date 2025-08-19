<script setup>
const props = defineProps(['recipe', 'handleClick'])

</script>

<template>
  <div @click="handleClick" class="cursor-pointer">
    <Card
      class="w-full h-[270px] flex flex-col justify-between rounded-[20px] shadow-[0px_5px_20px_3px_rgba(0,0,0,0.15)] hover:shadow-[0px_5px_20px_4px_rgba(0,0,0,0.20)] transition-shadow duration-[400ms]">
      <template #header>
        <img :alt="recipe.name" class="rounded-[20px] p-1.5 w-full h-full object-cover" :src='recipe.image' />
      </template>

      <template #content>
        <div class="flex justify-between items-end gap-3">
          <div>
            <h3 class="text-secondary whitespace-wrap text-[17px]">{{ recipe?.name }}</h3>
            <h6 class="text-quick-silver text-[14px]">{{ recipe?.tags?.[0] }}</h6>
          </div>

          <div class="bg-primary p-1 px-1.5 rounded-xl flex gap-1 items-center">
            <Icon name="lucide:star" size="12" class="text-white" />
            <span class="text-white font-bold text-[9px]">{{ recipe?.rating }}</span>
          </div>
        </div>

      </template>
    </Card>
  </div>
</template>
