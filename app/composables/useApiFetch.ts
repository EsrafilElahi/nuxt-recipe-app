export const useApiFetch = (url: string, options: any = {}) => {
  const config = useRuntimeConfig();
  const token = useCookie("token");

  return useFetch(url, {
    baseURL: config?.public?.apiBaseUrl,

    cache: "force-cache",
    revalidate: 60000, // 60 mins
    staleWhileRevalidate: true,

    headers: {
      Authorization: token?.value ? `Bearer ${token?.value}` : "",
      ...options.headers,
    },
    ...options,
    onRequest: ({ options, request }) => {
      if (process.dev) {
        console.log("dev requests log :", request);
      }
    },
    onResponse: ({ response }) => {},
    onResponseError: ({ response }) => {
      if (response.status === 401) {
        showError("لطفا مجدد وارد شوید!");
        navigateTo("/login");
      }
    },
  });
};
