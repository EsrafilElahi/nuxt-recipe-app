<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'nuxt recipe app'
  }

})

</script>

<template>
  <Toolbar class="bg-primary rounded-none">
    <template #start>
      <h2 v-capitalize class="font-bold text-[25px]">{{ title }}</h2>
    </template>


    <template #end>
      <NuxtLink to="/about" class="w-[42px] h-[42px] mr-3">
        <Button outlined rounded aria-label="about" class="group w-full h-full">
          <Icon name="lucide:user" class="text-white group-hover:text-primary" />
        </Button>
      </NuxtLink>

      <NuxtLink to="/" class="w-[42px] h-[42px]">
        <Button outlined rounded aria-label="home" class="group w-full h-full">
          <Icon name="lucide:house" class="text-white group-hover:text-primary" />
        </Button>
      </NuxtLink>
    </template>
  </Toolbar>
</template>
