export const useHeaderSwitcher = defineStore("HeaderSwitcher", () => {
  const CurrentHeader = ref<"en" | "ar">("en");

  return { CurrentHeader };
});
