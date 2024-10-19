export class Payment {
  _id: string
  date: string
  invoiceId: string
  paidBusAmount: number
  paidSchoolAmount: number
}

export class InvoicesDto {
  _id: string
  studentId: { _id: string; name: string }
  totalAmount: number | string
  schoolPrice: number | string
  remainingAmount: number | string
  totalPaid: number | string
  busPrice: number | string
  date: string
  payments: Payment[]
}

export class AddInvoiceDto {
  studentId: string
  familyId: string
  schoolPrice: number
  busPrice: number
}

export class AddPaymentDto {
  invoiceId: string
  paidSchoolAmount = 0
  paidBusAmount = 0
  receiptNumber: number
}
