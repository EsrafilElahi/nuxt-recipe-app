<script setup>
const route = useRoute();
const title = computed(() => route.meta.layoutProps?.title || 'nuxt recipe app')

</script>

<template>
  <div>
    <CustomToolbar :key="title" :title="title" />
    <div class="py-[65px] px-[100px]">
      <slot />
    </div>
  </div>
</template>
