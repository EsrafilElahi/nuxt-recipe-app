<script setup>
const value = ref()
</script>

<template>
  <ClientOnly>
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText v-model="value" placeholder="Search" />
    </IconField>
  </ClientOnly>
</template>