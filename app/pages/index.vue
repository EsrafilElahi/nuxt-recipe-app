<script setup>

const handleHydration = () => {
  console.log('handleHydration comments')
}

onNuxtReady(() => {
  console.log('app is ready!')
})

</script>
<template>
  <div>

    <NuxtClientFallback fallback-tag="section">
      <template #fallback>
        <span>loading...</span>
      </template>

      <AsianCategoryFoods />
    </NuxtClientFallback>



    <div class="flex justify-between items-start gap-[60px]">
      <NuxtClientFallback fallback-tag="section">
        <template #fallback>
          <span>loading...</span>
        </template>

        <PizzaCategoryFoods />
      </NuxtClientFallback>


      <div class="flex flex-col items-start justify-between h-full gap-10">
        <img src="/images/chef.png" alt="chef" class="w-[600px] h-[300px] rounded-2xl">
        <!-- <NuxtPicture fit="cover" height="200" src="/images/chef.png" alt="test" sizes="100vw sm:50vw md:400px" densities="x1" /> -->

        <img src="/images/food.jpg" alt="chef" class="w-[600px] h-[300px] rounded-2xl">
      </div>
    </div>


    <NuxtIsland name="Comments" :lazy="true" :client-only="true" @hydrated="handleHydration" />

  </div>
</template>
