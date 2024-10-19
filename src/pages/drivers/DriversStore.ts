import { useApi } from '@/composable/useApi'
import { DriverDto } from './dto'

export const useDriversStore = defineStore('Drivers', () => {
  const { POST, GET, DELETE } = useApi()

  const driversList = ref<DriverDto[]>([])
  const driversDetails = ref<DriverDto>()

  async function GetAllDrivers() {
    const response = await GET<DriverDto[]>('/drivers')
    driversList.value = response.data
    return response
  }

  async function AddDriver(payload: DriverDto) {
    const response = await POST('/drivers', payload, { success: 'Done', error: true })
    return response
  }

  async function GetDriverById(id: string) {
    const response = await GET<DriverDto>(`/drivers/${id}`)
    driversDetails.value = response.data
    return response
  }

  async function DeleteDriver(id: string) {
    const response = await DELETE(`/drivers/${id}`, undefined)
    return response
  }

  async function UpdateDriver(id: string, payload: DriverDto) {
    const response = await POST(`/drivers/${id}`, payload, { success: 'Done', error: true })
    return response
  }

  return { GetAllDrivers, AddDriver, GetDriverById, DeleteDriver, UpdateDriver, driversDetails, driversList }
})
