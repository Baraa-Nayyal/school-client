import type { PageMeta } from "@/types/app/PageMeta";

export const useAppStore = defineStore("App", () => {
  const inputLang = ref("");

  const count = ref("0");

  setTimeout(() => {
    count.value = "99999";
  }, 1000);

  const PageMeta = ref<PageMeta>({
    title: "",
    icon: "",
    breadCrumb: [],
  });

  const isLoading = ref(false);

  function SetPageMeta(meta: PageMeta) {
    PageMeta.value = { ...meta };
  }

  // const startupCalls = () =>
  //   Promise.all([
  //     store.GetUnReadNotifications(),
  //     // settingStore.GetAllAreas(),
  //     // settingStore.GetAllCities(),
  //     // settingStore.GetAllLabels(),
  //     // settingStore.GetCitiesWithArea(),
  //     // settingStore.GetAllShopCategories(),
  //     // notificationStore.GetUnRead(),
  //   ]);

  return { PageMeta, SetPageMeta, isLoading, inputLang, count };
});
