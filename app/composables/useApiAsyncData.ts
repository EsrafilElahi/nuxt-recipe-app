export const useApiAsyncData = (
  url: string,
  key: string,
  options: {
    fetchOptions?: any;
    asyncDataOptions?: any;
  } = {}
) => {
  const config = useRuntimeConfig();
  const token = useCookie("token");

  return useAsyncData(
    key,
    async () => {
      return $fetch(url, {
        baseURL: config.public.apiBaseUrl,
        headers: {
          Authorization: token.value ? `Bearer ${token.value}` : "",
          ...options.fetchOptions.headers,
        },

        ...options.fetchOptions,

        onRequest: ({ options, request }) => {
          if (process.dev) {
            console.log("dev requests log :", request);
          }
        },
        onResponse: ({ response }) => {},
        onResponseError: ({ response }) => {
          if (response.status === 401) {
            showError("لطفا دوباره لاگین کنید!");
            navigateTo("/login");
          }
        },
      });
    },
    {
      cache: "force-cache",
      revalidate: 60000,
      staleWhileRevalidate: true,
      ...options.asyncDataOptions, // برای optionsهای اضافی useAsyncData
    }
  );
};
