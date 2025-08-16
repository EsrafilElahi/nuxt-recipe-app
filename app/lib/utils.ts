export const capitalizeText = (el: any) => {
  if (
    el.childNodes.length === 1 &&
    el.childNodes[0].nodeType === Node.TEXT_NODE
  ) {
    const text = el.childNodes[0].textContent;

    // استفاده از regex برای حفظ فضاهای خالی متعدد
    el.childNodes[0].textContent = text.replace(/\S+/g, (word: string) => {
      if (word.length === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  }
};
