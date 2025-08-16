<script setup>
const value = ref()
</script>

<template>
  <IconField>
    <InputIcon class="pi pi-search" />
    <InputText v-model="value" placeholder="Search" />
  </IconField>
</template>