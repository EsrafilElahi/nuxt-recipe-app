<script setup lang="ts">

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
      <NuxtLoadingIndicator color="#f6b100" />
      <NuxtErrorBoundary>
        <NuxtPage />
      </NuxtErrorBoundary>
    </NuxtLayout>
  </div>
</template>
