<script setup lang="ts">
import { useDivisionsStore } from '@/pages/divisions/DivisionsStore'
import Page from '@/shared/Page.vue'
import { useAppStore } from '@/stores/App'
import { useToast } from 'vue-toastification'
import { VDataTable } from 'vuetify/components'
import { ClassDto, DivisionDto } from './dto'

const store = useDivisionsStore()

const divisionDto = ref(new DivisionDto())

const classDto = ref(new ClassDto())

const toast = useToast()

const { divisionsList, classesList } = storeToRefs(store)

const submitDivision = () => {
  const id = divisionDto.value._id
  if (id) {
    store.UpdateDivision(id, divisionDto.value)
    closeDiv()
  } else {
    store.AddDivision(divisionDto.value).then(res => {
      // store.GetAllDivisions()
      console.log(divisionsList.value)
      console.log('res ', res?.data)
      toast.success('done')
      closeDiv()
    })
  }
}

const submitClass = () => {
  const id = classDto.value._id
  if (id) {
    store.UpdateClass(id, classDto.value)
    closeClass()
  } else {
    store.AddClass(classDto.value).then(() => {
      toast.success('done')
      // store.GetAllClasses()
      closeClass()
    })
  }
}

const DivisionsPage = ref<InstanceType<typeof Page> | null>(null)

const onLoad = () => {
  useAppStore().SetPageMeta({
    breadCrumb: [],
    icon: 'ri-building-2-line',
    title: 'Classes & Divisions',
  })

  store.GetAllDivisions()
  store.GetAllClasses()
}

const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Details', value: 'actions', align: 'center' },
]

onLoad()

const divisionDialog = ref(false)
const classesDialog = ref(false)

const showDivDetails = (item: DivisionDto) => {
  divisionDto.value = { ...item }
  divisionDialog.value = true
}

const showClssDetails = (item: ClassDto) => {
  classDto.value = { ...item }
  classesDialog.value = true
}

const closeDiv = () => {
  divisionDialog.value = false
  divisionDto.value = new DivisionDto()
}

const closeClass = () => {
  classesDialog.value = false
  classDto.value = new ClassDto()
}

const deleteClass = () => {
  classesDialog.value = false
  store.DeleteClass(classDto.value._id as string).then(() => {
    // store.GetAllClasses()
  })
}
const deleteDivision = () => {
  divisionDialog.value = false
  store.DeleteDivision(divisionDto.value._id as string).then(() => {
    // store.GetAllDivisions()
  })
}
</script>

<template>
  <Page
    v-bind:has-search="false"
    ref="DivisionsPage"
    icon="tabler-user"
    :add="false"
  >
    <div class="flex gap-6 justify-between w-full">
      <VCard class="w-full h-fit">
        <div class="flex justify-between p-5">
          <VCardTitle>Divisions</VCardTitle>
          <VCardActions>
            <VBtn
              @click="divisionDialog = true"
              variant="elevated"
              >Add Division
            </VBtn>
          </VCardActions>
          <VDialog
            v-model="divisionDialog"
            scrollable
            persistent
            color="primary"
            :width="400"
          >
            <VCard>
              <div class="p-5 text-lg flex justify-between items-center font-bold">
                <div>New Division</div>
                <IconBtn
                  icon="tabler-x"
                  variant="plain"
                  class="flex z-50"
                ></IconBtn>
              </div>

              <main class="p-2">
                <VTextField
                  label="Division Name"
                  v-model="divisionDto.name"
                />
              </main>

              <VDivider />
              <VCardActions class="m-2">
                <VBtn
                  @click="submitDivision"
                  variant="flat"
                >
                  Save
                </VBtn>
                <VBtn
                  variant="tonal"
                  @click="closeDiv"
                >
                  Cancel
                </VBtn>
                <VBtn
                  v-if="divisionDto._id"
                  variant="tonal"
                  color="error"
                  @click="deleteDivision"
                >
                  Delete
                </VBtn>
              </VCardActions>
            </VCard>
          </VDialog>
        </div>
        <VDataTable
          :items-per-page="-1"
          :items="divisionsList"
          :headers="(headers as any)"
        >
          <template #item.actions="{ item }">
            <div class="d-flex gap-1 justify-center">
              <IconBtn @click="showDivDetails(item)">
                <VIcon icon="ri-home-smile-line" />
              </IconBtn>
            </div> </template
        ></VDataTable>
      </VCard>
      <VCard class="w-full h-fit">
        <div class="flex justify-between p-5">
          <VCardTitle>Classes</VCardTitle>
          <VCardActions>
            <VBtn
              @click="classesDialog = true"
              variant="elevated"
              >Add Class
            </VBtn>
          </VCardActions>
          <VDialog
            v-model="classesDialog"
            scrollable
            persistent
            color="primary"
            :width="400"
          >
            <VCard>
              <div class="p-5 text-lg flex justify-between items-center font-bold">
                <div>New Class</div>
                <IconBtn
                  icon="tabler-x"
                  variant="plain"
                  class="flex z-50"
                ></IconBtn>
              </div>

              <main class="p-2">
                <VTextField
                  label="Class Name"
                  v-model="classDto.name"
                />
                <VSelect
                  class="mt-4"
                  label="Division Name"
                  multiple
                  v-model="classDto.divisionsIds"
                  item-title="name"
                  item-value="_id"
                  :items="divisionsList"
                />
              </main>

              <VDivider />
              <VCardActions class="m-2">
                <VBtn
                  @click="submitClass"
                  variant="flat"
                >
                  Save
                </VBtn>
                <VBtn
                  variant="tonal"
                  @click="closeClass"
                >
                  Cancel
                </VBtn>
                <VBtn
                  v-if="classDto._id"
                  variant="tonal"
                  color="error"
                  @click="deleteClass"
                >
                  Delete
                </VBtn>
              </VCardActions>
            </VCard>
          </VDialog>
        </div>
        <VDataTable
          :items-per-page="-1"
          :items="classesList"
          :headers="(headers as any)"
        >
          <template #item.actions="{ item }">
            <div class="d-flex gap-1 justify-center">
              <IconBtn @click="showClssDetails(item)">
                <VIcon icon="ri-home-smile-line" />
              </IconBtn>
            </div> </template
        ></VDataTable>
      </VCard>
    </div>
  </Page>
</template>
