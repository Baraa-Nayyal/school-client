<script setup lang="ts">
import Page from '@/shared/Page.vue'
import { useAppStore } from '@/stores/App'
import { useDriversStore } from './DriversStore'
import { DriverDto } from './dto'

const store = useDriversStore()
const { driversList } = storeToRefs(store)
const driveDto = ref(new DriverDto())

const router = useRouter()
const onLoad = () => {
  useAppStore().SetPageMeta({
    breadCrumb: [],
    icon: 'tabler-discount-2',
    title: 'Drivers',
  })

  store.GetAllDrivers()
}

onLoad()

const Pagey = ref<InstanceType<typeof Page> | null>(null)

const close = () => {
  Pagey.value?.closeDialog()
}

const headers = [
  { title: 'name', value: 'name' },
  { title: 'Details', value: 'actions', align: 'center' },
]

const submit = () => {
  store.AddDriver(driveDto.value)
}
</script>

<template>
  <Page
    ref="Pagey"
    icon="tabler-user"
    button-text="إضافة سائق"
    dialog-title="سائق جديد"
  >
  <div>coming soon</div>
    <!-- <template #dialog-form>
      <div>
        <VTextField
          v-model="driveDto.name"
          label="school"
        />
      </div>
      <div>
        <VBtn @click="submit">Done</VBtn>
        <VBtn
          @click="close"
          variant="outlined"
          >Back</VBtn
        >
      </div>
    </template>
    <VDataTable
      :headers="(headers as any)"
      :items="driversList"
    >
      <template #item.actions="{ item }">
        <div class="d-flex gap-1 justify-center">
          <IconBtn @click="router.push(`drivers/${item._id}`)">
            <VIcon icon="ri-home-smile-line" />
          </IconBtn>
        </div> </template
    ></VDataTable> -->
  </Page>
</template>
