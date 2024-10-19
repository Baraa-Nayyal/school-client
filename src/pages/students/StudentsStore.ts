import { useApi } from '@/composable/useApi'
import { AddFamilyDto, AddStudentDto, FamilyDto, GetStudentsDto, NamesDto } from './dto'

export const useStudentsStore = defineStore('Students', () => {
  const { POST, GET, DELETE } = useApi()

  const studentsList = ref<GetStudentsDto[]>([])
  const familiesList = ref<FamilyDto[]>([])
  const studentsNamesList = ref<NamesDto[]>([])
  const familiesNamesList = ref<NamesDto[]>([])

  async function GetAllStudents() {
    const response = await GET<GetStudentsDto[]>('/students')
    studentsList.value = response.data
    return response
  }

  async function AddStudent(paylod: AddStudentDto) {
    const response = await POST<GetStudentsDto, AddStudentDto>('/students', paylod, { success: 'Done!', error: true })
    if (response?.status == 200) {
      studentsList.value.push(response!.data)
    }
    return response
  }

  async function GetStudentsNames() {
    const response = await GET<NamesDto[]>('/students/names')
    studentsNamesList.value = response.data
    return response
  }

  async function DeleteStudent(id: string) {
    const response = await DELETE(`/students/${id}/delete`, undefined)

    studentsList.value = studentsList.value.filter(student => {
      return student._id != id
    })
    return response
  }

  async function GetAllFamilies() {
    const response = await GET<FamilyDto[]>('/students/family')
    familiesList.value = response.data
    return response
  }

  async function GetFamiliesNames() {
    const response = await GET<NamesDto[]>('/students/familyNames')
    familiesNamesList.value = response.data
    return response
  }

  async function AddFamily(payload: AddFamilyDto) {
    const response = await POST<FamilyDto, AddFamilyDto>('/students/family', payload)

    familiesList.value.push(response!.data)

    return response
  }

  async function DeleteFamily(id: string) {
    const response = await DELETE(`/students/family/${id}/delete`, undefined)

    familiesList.value = familiesList.value.filter(family => {
      return family._id != id
    })

    return response
  }

  return {
    studentsList,
    GetAllStudents,
    AddStudent,
    GetStudentsNames,
    studentsNamesList,
    GetAllFamilies,
    familiesList,
    AddFamily,
    GetFamiliesNames,
    familiesNamesList,
    DeleteStudent,
    DeleteFamily,
  }
})
