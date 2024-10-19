import { useApi } from '@/composable/useApi'
import { AddInvoiceDto, AddPaymentDto, InvoicesDto } from './dto'

export const useInvoicesStore = defineStore('Invoices', () => {
  const { POST, GET, DELETE } = useApi()

  const invoicesList = ref<InvoicesDto[]>([])
  const invoiceDetails = ref<InvoicesDto>()

  async function GetInvoices() {
    const response = await GET<InvoicesDto[]>('/invoices')
    invoicesList.value = response.data
    return response
  }

  async function DeleteInvoice(id: string) {
    const response = DELETE(`/invoices/delete/${id}`, undefined)

    invoicesList.value = invoicesList.value.filter(invoice => {
      return invoice._id != id
    })

    return response
  }

  async function AddInvoice(payload: AddInvoiceDto) {
    const response = await POST<InvoicesDto, AddInvoiceDto>('/invoices', payload, { success: 'done', error: true })
    if (response?.status == 200) {
      invoicesList.value.push(response.data)
    }
    return response
  }

  async function GetInvoiceById(id: string) {
    const response = await GET<InvoicesDto>(`/invoices/details/${id}`)
    invoiceDetails.value = response.data
    return response
  }

  async function AddPayment(payload: AddPaymentDto) {
    const response = await POST<InvoicesDto, AddPaymentDto>('/invoices/add-payment', payload, {
      success: 'done',
      error: true,
    })
    return response
  }

  return {
    invoicesList,
    GetInvoices,
    AddInvoice,
    AddPayment,
    GetInvoiceById,
    invoiceDetails,
    DeleteInvoice,
  }
})
