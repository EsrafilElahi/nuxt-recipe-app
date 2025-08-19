// composables/useDebounce.ts
export const useDebounce = (value: Ref<string>, delay: number = 500) => {
  const debouncedValue = ref(value.value);
  
  let timeoutId: NodeJS.Timeout;
  
  watch(value, (newValue) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      debouncedValue.value = newValue;
    }, delay);
  });
  
  return debouncedValue;
};