<script setup>

</script>

<template>
  <Toolbar class="bg-primary rounded-none">
    <template #start>
      <h2 v-capitalize class="font-bold text-lg">nuxt recipe app</h2>
    </template>


    <template #end>
      <Button outlined rounded aria-label="about" class="group mr-3">
        <NuxtLink to="/about">
          <Icon name="lucide:user" class="text-white group-hover:text-primary" />
        </NuxtLink>
      </Button>

      <Button outlined rounded aria-label="home" class="group">
        <NuxtLink to="/">
          <Icon name="lucide:house" class="text-white group-hover:text-primary" />
        </NuxtLink>
      </Button>
    </template>
  </Toolbar>
</template>
