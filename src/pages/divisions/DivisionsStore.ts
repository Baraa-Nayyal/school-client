import { useApi } from '@/composable/useApi'
import { ClassDto, DivisionDto } from './dto'

export const useDivisionsStore = defineStore('Divisions', () => {
  const { POST, GET, DELETE } = useApi()

  const divisionsList = ref<DivisionDto[]>([])
  const classesList = ref<ClassDto[]>([])

  async function AddDivision(payload: DivisionDto) {
    const response = await POST<DivisionDto, DivisionDto>('/divisions', { name: payload.name })
    if (response?.status == 200) {
      divisionsList.value.push({ ...response.data })
    }
    return response
  }

  async function GetAllDivisions() {
    const response = await GET<DivisionDto[]>('/divisions')
    divisionsList.value = response.data
    return response
  }

  async function DeleteDivision(id: string) {
    const response = await DELETE(`/divisions/${id}`, undefined)
    divisionsList.value = divisionsList.value.filter(item => {
      return item._id != id
    })
    return response
  }

  async function UpdateDivision(id: string, paylod: DivisionDto) {
    const response = await POST(`/divisions/${id}`, paylod)
    return response
  }

  async function GetAllClasses() {
    const response = await GET<ClassDto[]>('/classes')
    classesList.value = response.data
    return response
  }

  async function DeleteClass(id: string) {
    const response = await DELETE(`/classes/${id}`, undefined)
    classesList.value = classesList.value.filter(item => {
      return item._id != id
    })
    return response
  }

  async function UpdateClass(id: string, paylod: ClassDto) {
    const response = await POST(`/classes/${id}`, paylod)
    return response
  }

  async function AddClass(payload: ClassDto) {
    const response = await POST<ClassDto, ClassDto>('/classes', payload)
    if (response) {
      classesList.value.push(response.data)
    }
    return response
  }

  return {
    AddDivision,
    GetAllDivisions,
    divisionsList,
    GetAllClasses,
    AddClass,
    classesList,
    DeleteClass,
    UpdateClass,
    DeleteDivision,
    UpdateDivision,
  }
})
