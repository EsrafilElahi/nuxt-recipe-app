<script setup>
definePageMeta({
  layout: 'default',
  layoutProps: {
    title: 'search food'
  }
});

const handleHydration = () => {
  console.log('handleHydration search component!!!!')
}


</script>

<template>
  <div>

    <ClientOnly>
      <SearchBox />
    </ClientOnly>

    <!-- <NuxtIsland name="SearchBox" :client-only="true" @hydrated="handleHydration" /> -->
  </div>
</template>
