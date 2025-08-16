<script setup>
definePageMeta({
  layout: 'default',
  layoutProps: {
    title: 'search food'
  }
})

</script>

<template>
  <div>
    <NuxtIsland name="SearchBox" :client-only="true" />
  </div>
</template>
