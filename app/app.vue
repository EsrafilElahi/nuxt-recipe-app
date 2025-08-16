<script setup lang="ts">
import CustomError from './components/CustomError.vue';

</script>

<template>

  <Head>
    <!-- اتصالات پیش‌نیاز -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=true>

    <!-- لینک فونت‌ Delius -->
    <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet">
  </Head>

  <div>
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtLoadingIndicator color="#00dc82" />
      <NuxtErrorBoundary>
        <NuxtPage />
        <template #error="{ error }">
          <CustomError :error="error" />
        </template>
      </NuxtErrorBoundary>
    </NuxtLayout>
  </div>
</template>
