<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <header class="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div class="mx-auto max-w-7xl w-full px-4 py-3 flex items-center gap-6">
        <NuxtLink to="/" class="font-semibold text-gray-900 hover:text-gray-700">Nuxt App</NuxtLink>
        <nav class="ml-auto flex items-center gap-4">
          <NuxtLink to="/" class="text-sm text-gray-600 hover:text-gray-900">Home</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t bg-white">
      <div class="mx-auto max-w-7xl w-full px-4 py-6 text-xs text-gray-500">
        © Nuxt App
      </div>
    </footer>
  </div>
</template>