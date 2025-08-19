<script setup>

const { data, pending, error } = useApiAsyncData('/comments', 'comments-list', {
  fetchOptions: {
    query: {
      limit: 5
    }
  },

  asyncDataOptions: {
    pick: ['comments'],
  }
});


const comments = computed(() => data.value?.comments)

watchEffect(() => {
  if (data.value) {
    console.log('Comments data :', data.value)
  }
})

</script>

<template>

  <div v-if="pending">pending...</div>
  <div v-else-if="error">error {{ error.message }}</div>

  <div v-else>
    <h1 class="text-secondary text-[24px] pb-[10px] font-bold">Comments (5)</h1>
    <CommentsItem v-for="comment in comments" :key="comment.id" :comment="comment" />
  </div>
</template>
