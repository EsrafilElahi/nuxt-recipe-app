<script setup>
definePageMeta({
  layout: 'default',
  layoutProps: {
    title: 'search food'
  }
});

const handleHydration = () => {
  console.log('handleHydration comments')
}


</script>

<template>
  <div>
    <NuxtIsland name="SearchBox" :client-only="true" @hydrated="handleHydration" />
  </div>
</template>
