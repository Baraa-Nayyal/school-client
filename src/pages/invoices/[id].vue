<script setup lang="ts">
import Page from '@/shared/Page.vue'
import { useAppStore } from '@/stores/App'
import { useInvoicesStore } from './InvoicesStore'
import { AddPaymentDto } from './dto'

const route = useRoute()
const router = useRouter()

const id = route.params.id as string
const store = useInvoicesStore()
const { invoiceDetails } = storeToRefs(store)

const addPaymentDto = ref(new AddPaymentDto())

const onLoad = () => {
  useAppStore().SetPageMeta({
    breadCrumb: [],
    icon: 'ri-home-smile-line',
    title: `Invoice Details `,
  })
  store.GetInvoiceById(id).then(() => {
    invoiceDetails.value = invoiceDetails.value
  })
}
onLoad()

const Pagey = ref<InstanceType<typeof Page> | null>(null)

const submit = () => {
  store.AddPayment({ ...addPaymentDto.value, invoiceId: id })
}
const close = () => {
  Pagey.value?.closeDialog()
}

const headers = [
  { title: 'Paid Bus', value: 'paidBusAmount' },
  { title: 'Paid School', value: 'paidSchoolAmount' },
  { title: 'date', value: 'date' },
]

const paidAmount = computed(() => {
  // return invoiceDetails.value?.totalAmount - invoiceDetails.value?.remainingAmount
})
</script>

<template>
  <Page
    ref="Pagey"
    :has-search="false"
    icon="ri-home-smile-line"
    button-text="إضافة دفعة"
  >
    <div class="flex gap-4 items-center justify-center mb-10">
      <VCard title="Total"
        ><VCardText class="text-center mx-auto w-full">{{
          Number(invoiceDetails?.totalAmount).toLocaleString()
        }}</VCardText></VCard
      >
      <VCard title="Paid"
        ><VCardText class="text-center mx-auto w-full">{{
          Number(invoiceDetails?.totalPaid).toLocaleString()
        }}</VCardText></VCard
      >
      <VCard title="Remaining"
        ><VCardText class="text-center mx-auto w-full">{{
          Number(invoiceDetails?.remainingAmount).toLocaleString()
        }}</VCardText></VCard
      >
    </div>
    <template #dialog-form>
      <div class="flex gap-3">
        <VTextField
          label="Paid Bus"
          type="number"
          v-model.number="addPaymentDto.paidBusAmount"
        />
        <VTextField
          label="Paid School"
          type="number"
          v-model.number="addPaymentDto.paidSchoolAmount"
        />
        <VTextField
          label="Receipt Number"
          class="w-4"
          type="number"
          v-model.number="addPaymentDto.receiptNumber"
        />
      </div>
      <div class="py-4 flex gap-2">
        <VBtn @click="submit">Add</VBtn>
        <VBtn
          @click="close"
          variant="outlined"
          >Cancel</VBtn
        >
      </div>
    </template>
    <VCard title="Payments">
      <VDataTable
        :headers="headers"
        :items="invoiceDetails?.payments"
      >
        <template #item.actions="{ item }">
          <div class="d-flex gap-1 justify-center">
            <IconBtn @click="router.push(`students/${item._id}`)">
              <VIcon icon="ri-home-smile-line" />
            </IconBtn>
          </div>
        </template>

        <template #item.date="{ item }">
          {{ new Date(item.date).toLocaleDateString('en-GB') }}
        </template>
      </VDataTable>
    </VCard>
  </Page>
</template>
