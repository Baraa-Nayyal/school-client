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
    icon: 'ri-home-smile-line',
    title: 'الطلاب',
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
  { title: 'اسم الطالب', value: 'name' },
  { title: 'الصف', value: 'class.name' },
  // { title: 'الشعبة', value: 'division.name' },
  { title: 'تفاصيل', value: 'actions', align: 'center' },
]

const headers2 = [
  { title: 'اسم العائلة', value: 'familyName' },
  { title: 'الطلاب', value: 'students' },
  { title: 'تفاصيل', value: 'actions', align: 'center' },
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
    button-text="إضافة جديد"
    dialog-title="إضافة جديد"
    @update:search="search"
  >
    <template #action-button><VBtn @click="open">إضافة</VBtn></template>
    <template #dialog-form>
      <div class="w-full">
        <VRadioGroup v-model="activeSection">
          <VRadio
            value="student"
            label="طالب"
          />
          <VRadio
            value="family"
            label="عائلة"
          />
        </VRadioGroup>
        <div
          v-if="activeSection === 'student'"
          class="grid grid-cols-2 gap-4 p-5 md:grid-cols-3"
        >
          <VTextField
            v-model="addStudentDto.name"
            label="* اسم الطالب"
            :rules="[v => !!v || 'اسم الطالب مطلوب']"
          />
          <VSelect
            v-model="addStudentDto.class"
            label="*الصف"
            :items="classesList"
            item-value="_id"
            item-title="name"
            :rules="[v => !!v || 'اسم الطالب مطلوب']"
          />
          <VSelect
            v-model="addStudentDto.division"
            :items="divisionItems"
            item-value="_id"
            item-title="name"
            label="*الشعبة"
            :rules="[v => !!v || 'اسم الطالب مطلوب']"
          />
          <VTextField
            v-model="addStudentDto.dadName"
            label="اسم الأب"
          />
          <VTextField
            v-model="addStudentDto.momName"
            label="اسم الأم"
          />
          <VTextField
            v-model="addStudentDto.area"
            label="المنطقة"
          />
          <VTextField
            v-model="addStudentDto.dadNumber"
            label="رقم الأب"
          />
          <VTextField
            v-model="addStudentDto.momNumber"
            label="رقم الأم"
          />
          <VSelect
            v-model="addStudentDto.driver"
            item-value="_id"
            item-title="name"
            label="السائق"
          />
        </div>

        <div
          v-if="activeSection === 'family'"
          class="p-5 flex gap-4"
        >
          <VTextField
            label="اسم العائلة"
            v-model="addFamilyDto.familyName"
          />
          <VSelect
            label="الطلاب"
            v-model="addFamilyDto.studentIds"
            :items="studentsNamesList"
            item-value="_id"
            item-title="name"
            multiple
          />
        </div>

        <div class="flex gap-2 flex-row-reverse">
          <VBtn @click="activeSection === 'student' ? submit() : submit2()">{{
            activeSection === 'student' ? 'إضافة طالب' : 'إضافة عائلة'
          }}</VBtn>

          <VBtn
            @click="close"
            variant="outlined"
            >رجوع</VBtn
          >
        </div>
      </div>
    </template>
    <div class="flex flex-col gap-3">
      <VDataTable
        :headers="(headers as any)"
        :items="filtered"
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
