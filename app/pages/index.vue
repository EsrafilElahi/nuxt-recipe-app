<script setup>


</script>
<template>
  <div>

    <NuxtClientFallback fallback-tag="section">
      <template #fallback>
        <span>loading...</span>
      </template>

      <AsianCategoryFoods />
    </NuxtClientFallback>

  </div>
</template>
