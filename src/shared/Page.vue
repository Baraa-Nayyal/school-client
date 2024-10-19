<script lang="ts" setup>
import { useAppStore } from '@/stores/App'
const router = useRouter()

const props = defineProps({
  hasSearch: {
    type: Boolean,
    default: true,
  },
  dialogWidth: {
    type: Number,
    default: 992,
  },
  placeholder: {
    type: String,
    default: 'ابحث في الصفحة',
  },
  qury: {
    type: String,
  },
  add: {
    type: Boolean,
    default: true,
  },
  exportData: {
    type: Boolean,
    default: false,
  },
  buttonText: {
    type: String,
    default: 'إضافة',
  },
  exportText: {
    type: String,
    default: 'تصدير',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  dialogTitle: {
    type: String,
    default: 'Dialog Title',
  },
  subTitle: {
    type: String,
    default: 'SubTitle',
  },
  hasSubTitle: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: 'ri-add-line',
  },
  modalActions: {
    type: Boolean,
    default: false,
  },
  direct: {
    type: Boolean,
    default: false,
  },
  directUrl: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['ok', 'close', 'update:search', 'resetDto', 'dialogOpened'])

const reset = () => {
  closeDialog()
  emit('resetDto')
}

const AppStore = useAppStore()

// REFS
const { PageMeta } = storeToRefs(AppStore)
const dialog = ref(false)

// Getters

// Functions
const openDialog = () => (dialog.value = true)
const closeDialog = () => (dialog.value = false)
const saveEvent = () => emit('ok')
const exportToExcel = async () => {
  const url = window.URL.createObjectURL(new Blob([]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', 'StoresReport.xlsx')
  document.body.appendChild(link)
  link.click()
  link.remove()
}
// Watchers

defineExpose({
  openDialog,
  closeDialog,
})

const directUrl = () => {
  router.push(props.directUrl)
}
</script>

<template>
  <div class="page">
    <slot name="header">
      <div class="page-header flex-col gap-4 pb-4 sm:flex-row">
        <div class="flex gap-3 title items-center lg:justify-end">
          <h2 class="font-bold mt-1">
            {{ hasSubTitle ? subTitle : PageMeta.title }}
          </h2>

          <VIcon
            v-if="PageMeta.icon"
            color="primary"
            size="25px"
            class="mt-1"
            :icon="PageMeta.icon"
          />
        </div>

        <div class="min-w-full flex-wrap sm:min-w-[450px] flex justify-end items-center lg:mt-0">
          <slot name="delete-btn" />
          <slot name="actions">
            <VTextField
              v-if="hasSearch"
              class="min-w-[300px] mx-2"
              type="text"
              prepend-inner-icon="tabler-search"
              :placeholder="props.placeholder"
              @update:model-value="$emit('update:search', $event)"
            />
            <VBtn
              v-if="direct"
              @click="directUrl"
              >{{ buttonText }}</VBtn
            >
          </slot>
          <slot name="action-button">
            <VBtn
              @click="openDialog"
              prepend-icon="tabler-plus"
              v-if="add"
              id="btn_btn"
              variant="flat"
            >
              {{ buttonText }}
            </VBtn>
          </slot>
          <VDialog
            v-model="dialog"
            scrollable
            persistent
            color="primary"
            :width="dialogWidth"
          >
            <VCard>
              <div class="p-5 text-lg flex justify-between items-center font-bold">
                <div>
                  {{ dialogTitle }}
                </div>
                <IconBtn
                  icon="tabler-x"
                  variant="plain"
                  class="flex z-50"
                  @click="reset"
                ></IconBtn>
              </div>

              <main class="p-2">
                <slot name="dialog-form" />
              </main>

              <VDivider />
              <VCardActions v-if="modalActions">
                <VBtn
                  variant="flat"
                  @click="saveEvent"
                >
                  حفظ
                </VBtn>
                <VBtn
                  variant="tonal"
                  @click="dialog = false"
                >
                  تراجع
                </VBtn>
              </VCardActions>
            </VCard>
          </VDialog>
        </div>
      </div>
    </slot>

    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.page {
  .page-header {
    display: flex;
    justify-content: space-between;
    background-color: transparent !important;
    inline-size: 100%;
  }

  .v-input__control {
    display: flex;
    align-items: center;
    block-size: 3rem;
    grid-area: control;
  }

  .svg {
    color: rgb(140, 185, 65, 100%);
    margin-block-start: 10px;
    text-align: center;
  }

  .svg:hover {
    color: rgb(34, 51, 6);
  }

  #btn_btn {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    margin-inline: 10px;
    text-align: center;
  }
}
</style>
