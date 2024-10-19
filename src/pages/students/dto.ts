import { ClassDto, DivisionDto } from '@/pages/divisions/dto'
import { InvoicesDto } from '../invoices/dto'

class Driver {
  name: string
  _id: string
}

export class GetStudentsDto {
  _id: string
  name: string
  dadName: string
  momName: string
  area: string
  dadNumber: string
  momNumber: string
  class: ClassDto
  division: DivisionDto
  driver: Driver
  invoices: InvoicesDto[]
}

export class AddStudentDto {
  name: string
  class: string
  dadName: string
  momName: string
  area: string
  dadNumber: string
  momNumber: string
  division: string
  driver?: string
}

export class NamesDto {
  name: string
  _id: string
}

export class FamilyDto {
  _id: string
  familyName: string
  students: GetStudentsDto[]
}

export class AddFamilyDto {
  familyName: string
  studentIds: string[]
}
