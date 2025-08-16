<!-- eslint-disable vue/no-dupe-keys -->
<script setup>
const props = defineProps({
  error: Object
})

const error = useError()

// 21. clearError - پاک کردن خطا
const handleRetry = () => {
  return clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full text-center">
      <h1 class="text-4xl font-bold text-red-600 mb-4">خطا!</h1>
      <h2 class="text-2xl font-semibold mb-2 text-secondary-400">{{ error.statusCode }}</h2>
      <p class="text-lg text-secondary-300 mb-6">{{ error.message }}</p>

      <div class="flex flex-col items-center justify-center gap-4">
        <Button>
          <NuxtLink to="/">
            بازگشت به صفحه اصلی
          </NuxtLink>
        </Button>

        <Button variant="outlined" @click="handleRetry"> تلاش مجدد </Button>
      </div>
    </div>
  </div>
</template>