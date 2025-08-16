<script setup>
import { CustomToolbar } from '#components';


</script>
<template>
  <div>
    <!-- <CustomToolbar /> -->

    <span class="text-primary-100 font-bold">home page</span>

    <Button label="Verify" severity="primary" />

    <Button label="دکمه تست" icon="pi pi-check" />
    <InputText v-model="value" placeholder="متن..." />
  </div>
</template>
