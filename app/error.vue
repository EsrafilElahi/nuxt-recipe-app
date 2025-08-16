<!-- eslint-disable vue/no-dupe-keys -->
<script setup>
const props = defineProps({
  error: Object
})

const error = useError()

// 21. clearError - پاک کردن خطا
const handleRetry = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full text-center">
      <h1 class="text-4xl font-bold text-red-500 mb-4">خطا!</h1>
      <h2 class="text-2xl font-semibold mb-2">{{ error.statusCode }}</h2>
      <p class="text-lg mb-6">{{ error.message }}</p>

      <NuxtLink to="/" class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
        بازگشت به صفحه اصلی
      </NuxtLink>

      <button @click="handleRetry"
        class="mt-4 inline-block bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
        تلاش مجدد
      </button>
    </div>
  </div>
</template>