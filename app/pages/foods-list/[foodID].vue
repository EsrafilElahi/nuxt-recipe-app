<script setup>
const route = useRoute();

const foodID = computed(() => route?.params?.foodID ?? null);

const { data, pending, error, refresh } = useApiFetch(
  () => `/recipes/${foodID?.value}`,
  {
    key: `recipes-${foodID?.value}`,
    transform: (data) => {
      return {
        ...data,
        tag: data.tags || [],
        mealType: data.mealType || []
      }
    },
    lazy: true,
    watch: [foodID],
    immediate: computed(() => !!foodID.value), // فقط اگر foodID معتبر باشد اجرا شود
  }

);

const recipeData = computed(() => data.value || {});

watch(data, (newData) => {
  console.log('newDataaaaa id :', newData)
})

</script>

<template>
  <div v-if="pending">pending...</div>
  <div v-else-if="error">error {{ error.message }} </div>

  <div v-else class="flex justify-start gap-[100px] items-start">
    <div class="w-[700px] h-[500px]">
      <img :src="recipeData?.image" :alt="recipeData?.name" class="rounded-xl" />
    </div>

    <div class="flex flex-col gap-3">
      <span>name : {{ recipeData?.name }}</span>
      <span>cuisine : {{ recipeData?.cuisine }}</span>
      <span>difficulty : {{ recipeData?.difficulty }}</span>

      <div class="flex gap-3 whitespace-nowrap">
        tags :
        <span class="whitespace-nowrap" v-for="tag in recipeData?.tags">{{ tag }},</span>
      </div>

      <div class="flex gap-3 whitespace-nowrap">
        mealTypes :
        <span class="whitespace-nowrap" v-for="meal in recipeData?.mealType">{{ meal }},</span>
      </div>

    </div>
  </div>
</template>
