<script setup lang="ts">
import Page from '@/shared/Page.vue'
import { useAppStore } from '@/stores/App'
import { useDivisionsStore } from '../divisions/DivisionsStore'
import { useStudentsStore } from './StudentsStore'
import { AddFamilyDto, AddStudentDto } from './dto'

const StudentsPage = ref<InstanceType<typeof Page> | null>(null)

const store = useStudentsStore()
const classesStore = useDivisionsStore()
const { studentsList, familiesList, studentsNamesList } = storeToRefs(store)
const { classesList } = storeToRefs(classesStore)

const onLoad = () => {
  useAppStore().SetPageMeta({
    breadCrumb: [],
    icon: 'ri-user-smile-line',
    title: 'Students',
  })

  store.GetAllStudents()
  store.GetAllFamilies()
  // TODO:
}
onLoad()

const close = () => {
  StudentsPage.value?.closeDialog()

  addStudentDto.value = new AddStudentDto()
  addFamilyDto.value = new AddFamilyDto()
}

const addStudentDto = ref(new AddStudentDto())
const addFamilyDto = ref(new AddFamilyDto())

const submit = () => {
  store.AddStudent(addStudentDto.value).then(() => {
    // close()
  })
}

const submit2 = () => {
  store.AddFamily(addFamilyDto.value)
}

const divisionItems = computed(
  () => classesList.value.find(item => item._id === addStudentDto.value.class)?.divisionsIds || [],
)

const headers = [
  { title: 'Student Name', value: 'name' },
  { title: 'Class', value: 'class.name' },
  // { title: 'الشعبة', value: 'division.name' },
  { title: 'Details', value: 'actions', align: 'center' },
]

const headers2 = [
  { title: 'Family Name', value: 'familyName' },
  { title: 'Students', value: 'students' },
  { title: 'Details', value: 'actions', align: 'center' },
]

const open = () => {
  store.GetStudentsNames()
  classesStore.GetAllClasses()

  StudentsPage.value?.openDialog()
}

const activeSection = ref('student')

const deleteStudent = (id: string) => {
  store.DeleteStudent(id)
}

const deleteFamily = (id: string) => {
  store.DeleteFamily(id)
}

const filtered = ref([...studentsList.value])

const search = (val: string) => {
  filtered.value = studentsList.value.filter(student => student.name.includes(val))
}
</script>

<template>
  <Page
    ref="StudentsPage"
    icon="tabler-user"
    button-text="Add"
    dialog-title="Add New"
    @update:search="search"
  >
    <template #action-button><VBtn @click="open">Add</VBtn></template>
    <template #dialog-form>
      <div class="w-full">
        <VRadioGroup v-model="activeSection">
          <VRadio
            value="student"
            label="Student"
          />
          <VRadio
            value="family"
            label="Family"
          />
        </VRadioGroup>
        <div
          v-if="activeSection === 'student'"
          class="grid grid-cols-2 gap-4 p-5 md:grid-cols-3"
        >
          <VTextField
            v-model="addStudentDto.name"
            label="* Student Name"
            :rules="[v => !!v || 'field is required']"
          />
          <VSelect
            v-model="addStudentDto.class"
            label="*الصف"
            :items="classesList"
            item-value="_id"
            item-title="name"
            :rules="[v => !!v || 'field is required']"
          />
          <VSelect
            v-model="addStudentDto.division"
            :items="divisionItems"
            item-value="_id"
            item-title="name"
            label="*الشعبة"
            :rules="[v => !!v || 'field is required']"
          />
          <VTextField
            v-model="addStudentDto.dadName"
            label="Father's Name"
          />
          <VTextField
            v-model="addStudentDto.momName"
            label="Mom's Name"
          />
          <VTextField
            v-model="addStudentDto.area"
            label="Area"
          />
          <VTextField
            v-model="addStudentDto.dadNumber"
            label="Father's Number"
          />
          <VTextField
            v-model="addStudentDto.momNumber"
            label="Mom's Number"
          />
          <VSelect
            v-model="addStudentDto.driver"
            item-value="_id"
            item-title="name"
            label="Driver"
          />
        </div>

        <div
          v-if="activeSection === 'family'"
          class="p-5 flex gap-4"
        >
          <VTextField
            label="Family Name"
            v-model="addFamilyDto.familyName"
          />
          <VSelect
            label="Students"
            v-model="addFamilyDto.studentIds"
            :items="studentsNamesList"
            item-value="_id"
            item-title="name"
            multiple
          />
        </div>

        <div class="flex gap-2 flex-row-reverse">
          <VBtn @click="activeSection === 'student' ? submit() : submit2()">{{
            activeSection === 'student' ? 'Add Student' : 'Add Family'
          }}</VBtn>

          <VBtn
            @click="close"
            variant="outlined"
            >Cancel</VBtn
          >
        </div>
      </div>
    </template>
    <div class="flex flex-col gap-3">
      <VDataTable
        :headers="(headers as any)"
        :items="studentsList"
      >
        <template #item.actions="{ item }">
          <div class="d-flex gap-1 justify-center">
            <IconBtn @click="deleteStudent(item._id)">
              <VIcon
                color="error"
                icon="ri-delete-bin-line"
              />
            </IconBtn>
            <IconBtn>
              <VIcon icon="ri-edit-line" />
            </IconBtn>
          </div>
        </template>
      </VDataTable>
      <VDataTable
        :headers="(headers2 as any)"
        :items="familiesList"
      >
        <template #item.actions="{ item }">
          <div class="d-flex gap-1 justify-center">
            <IconBtn @click="deleteFamily(item._id)">
              <VIcon
                color="error"
                icon="ri-delete-bin-line"
              />
            </IconBtn>
            <IconBtn>
              <VIcon icon="ri-edit-line " />
            </IconBtn>
          </div>
        </template>

        <template #item.students="{ item }">{{ item.students.map(item => item.name).join(', ') }}</template>
      </VDataTable>
    </div>
  </Page>
</template>
