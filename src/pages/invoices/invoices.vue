<script setup lang="ts">
import Page from '@/shared/Page.vue'
import { useAppStore } from '@/stores/App'
import { useStudentsStore } from '../students/StudentsStore'
import { useInvoicesStore } from './InvoicesStore'
import { AddInvoiceDto } from './dto'

const InvoicesPage = ref<InstanceType<typeof Page> | null>(null)
const router = useRouter()

const store = useInvoicesStore()
const studetnsStore = useStudentsStore()
const { studentsNamesList, familiesNamesList } = storeToRefs(studetnsStore)

const addInvoiceDto = ref(new AddInvoiceDto())

const { invoicesList } = storeToRefs(store)

const onLoad = () => {
  useAppStore().SetPageMeta({
    breadCrumb: [],
    icon: 'ri-home-smile-line',
    title: 'الأقساط',
  })
  store.GetInvoices().then(() => {
    invoicesList.value = invoicesList.value.map(invoice => ({
      ...invoice,
      schoolPrice: invoice.schoolPrice.toLocaleString(),
      busPrice: invoice.busPrice.toLocaleString(),
      totalAmount: invoice.totalAmount.toLocaleString(),
      remainingAmount: invoice.remainingAmount.toLocaleString(),
    }))
  })
}

const open = () => {
  studetnsStore.GetStudentsNames()
  studetnsStore.GetFamiliesNames()
  InvoicesPage.value?.openDialog()
}

onLoad()

const close = () => {
  addInvoiceDto.value = new AddInvoiceDto()
  InvoicesPage.value?.closeDialog()
}

const submit = () => {
  store.AddInvoice(addInvoiceDto.value)
}

const headers = [
  { title: 'الاسم', value: 'name' },
  { title: 'قسط المدرسة', value: 'schoolPrice' },
  { title: 'قسط الأوتوكار', value: 'busPrice' },
  { title: 'الإجمالي', value: 'totalAmount' },
  { title: 'المتبقي', value: 'remainingAmount' },
  { title: 'التفاصيل', value: 'actions', align: 'center' },
]

const activeSelection = ref('student')

const filtered = ref([...invoicesList.value])

const search = (val: string) => {
  filtered.value = invoicesList.value.filter(invoice => invoice.studentId.name.includes(val))
}
</script>

<template>
  <Page
    ref="InvoicesPage"
    icon="tabler-user"
    button-text="إضافة قسط"
    dialog-title="قسط جديد"
    @update:search="search"
  >
    <template #action-button><VBtn @click="open">إضافة</VBtn></template>

    <template #dialog-form>
      <VRadioGroup
        inline
        v-model="activeSelection"
        class="mb-4"
      >
        <VRadio
          value="student"
          label="قسط طالب "
        />
        <VRadio
          value="family"
          label="قسط عائلة"
        />
      </VRadioGroup>
      <div class="flex gap-4 p-5">
        <VSelect
          v-if="activeSelection === 'student'"
          label="اسم الطالب"
          class="w-1/2"
          v-model="addInvoiceDto.studentId"
          :items="studentsNamesList"
          item-title="name"
          item-value="_id"
        />
        <VSelect
          v-else
          label="اسم العائلة"
          v-model="addInvoiceDto.familyId"
          class="w-1/2"
          :items="familiesNamesList"
          item-title="familyName"
          item-value="_id"
        />
        <VTextField
          label="قسط الأوتوكار"
          type="number"
          v-model.number="addInvoiceDto.busPrice"
        />
        <VTextField
          label="قسط المدرسة"
          type="number"
          v-model.number="addInvoiceDto.schoolPrice"
        />
      </div>
      <div class="flex gap-3">
        <VBtn @click="submit">إضافة</VBtn>
        <VBtn
          @click="close"
          variant="outlined"
          >رجوع</VBtn
        >
      </div>
    </template>
    <VDataTable
      :headers="(headers as any)"
      :items="filtered"
    >
      <template #item.actions="{ item }">
        <div class="d-flex gap-1 justify-center">
          <IconBtn @click="router.push(`invoices/${item._id}`)">
            <VIcon icon="ri-home-smile-line" />
          </IconBtn>
          <IconBtn @click="store.DeleteInvoice(item._id)">
            <VIcon
              color="error"
              icon="ri-delete-bin-line"
            />
          </IconBtn>
        </div>
      </template>
    </VDataTable>
  </Page>
</template>
