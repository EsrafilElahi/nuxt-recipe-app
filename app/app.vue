<script setup lang="ts">
const appConfig = useAppConfig();

useHeadSafe({
  title: 'recipe app',
  meta: [
    { name: 'description', content: 'recipe app' }
  ]
});

useSeoMeta({
  title: 'Recipe App',
  ogTitle: 'Recipe App SEO',
  description: 'This is Recipe App SEO, let me tell you all about it.',
  ogDescription: 'This is Recipe App SEO, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});

const publicUrl = useRuntimeConfig();
const headers = useRequestHeaders();



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
