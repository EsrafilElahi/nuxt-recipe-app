<script setup>

</script>

<template>
  <NuxtLink to="/about">
    <Card
      class="w-full h-[270px] flex flex-col justify-between rounded-[20px] shadow-[0px_5px_20px_3px_rgba(0,0,0,0.15)] hover:shadow-[0px_5px_20px_4px_rgba(0,0,0,0.20)] transition-shadow duration-[400ms]">
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
</template>
