<script setup>

const props = defineProps(['comment'])

</script>

<template>
  <div class="flex flex-col items-start justify-between gap-[22px] mt-10 border-b border-gray-200 pb-2">
    <div class="flex gap-[26px] items-center">
      <div class="flex justify-center items-center rounded-full bg-tan-tan w-[70px] h-[70px] overflow-hidden relative">
        <img src="https://thumbs.dreamstime.com/b/blank-gray-white-image-placeholder-icon-design-180792688.jpg" alt="person" class="absolute bottom-0">
      </div>

      <h4 class="text-secondary text-[20px] font-bold">{{ comment.user.fullName }}</h4>
    </div>

    <p class="text-secondary text-[16px]">{{ comment.body }}</p>

    <div class="flex justify-start items-center">
      <Icon name="lucide:heart" size="24" class="text-apple-red" />
      <span class="ml-1 mr-3 text-quick-silver text-[15px]">{{ comment.likes }}</span>
      <span class="text-quick-silver text-[15px]">{{ comment.id }} days ago</span>
    </div>

  </div>
</template>
