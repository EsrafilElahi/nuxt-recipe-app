export const useApiFetch = (url: string, options: any = {}) => {
  const config = useRuntimeConfig();
  const token = useCookie("token");

  return useFetch(url, {
    baseURL: config?.public?.apiBaseUrl,
    headers: {
      Authorization: token?.value ? `Bearer ${token?.value}` : "",
      ...options.headers,
    },
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
