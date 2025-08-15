export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("focus", {
    mounted(el) {
      el.focus();
    },
    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {};
    },
  });

  nuxtApp.vueApp.directive("uppercase", {
    mounted(el) {
      el.textContent = el.textContent?.toUpperCase();
    },

    updated(el) {
      el.textContent = el.textContent?.toUpperCase();
    },

    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {};
    },
  });
});
