// ! DONT TOUCH THIS FILE
// import { axiosIns } from '@/core/libs';
// import { EmployeeApi } from '@/api/Employee/endpoints'
import { API_URL } from '@/app.config'
import { useApi } from '@/composable/useApi'
import { axiosIns } from '@/plugins/axios'
import { router } from '@/plugins/router'
import type { RefreshTokenDecoded } from '@/types/auth/RefreshTokenDecoded'
import type { AxiosError } from 'axios'
import { jwtDecode } from 'jwt-decode'

import { useToast } from 'vue-toastification'

interface useAuthconfig {
  baseUrl: string
  loginEndpoint: string
  refreshTokenEndPoint: string
  key: string
}

const authConfig: useAuthconfig = {
  baseUrl: API_URL,
  loginEndpoint: 'http://localhost:3000/auth/login',
  refreshTokenEndPoint: 'Employee/RefreshToken',
  key: 'bronz',
}

enum BaseRoles {
  CompanySuperAdmin = 'CompanySuperAdmin',
  CompanyAdmin = 'CompanyAdmin',
  BranchUser = 'BranchUser',
  WarehouseUser = 'WarehouseUser',
  CallCenterUser = 'CallCenterUser',
  BrandManager = 'BrandManager',
  Driver = 'Driver',
}
export const isLoggedIn = () => {
  function GetUserData(): any | null {
    const userData = localStorage.getItem(`${authConfig.key}-user-data`)
    if (userData) return JSON.parse(userData)
    else return null
  }
  if (GetUserData() == null) return false
  else return true

  // return localStorage.getItem(`${authConfig.key}-user-data`);
}
export const useAuth = (config: useAuthconfig = authConfig) => {
  const toast = useToast()
  const { POST } = useApi()

  async function Login(payload: any) {
    try {
      const response: any = await POST(config.loginEndpoint, payload, {
        comfirm: false,
        success: false,
        error: true,
      })

      console.log(response)
      if (response?.status === 200) {
        SetUserData(response.data)
        router.push('/')
        return response
      }
    } catch (error) {
      // const result = HandleLoginError(er as AxiosError, payload);

      console.log('CATCH', error)
      throw error
      // toast.error(result);
    }
  }

  // any => LoginResponse
  function SetUserData(userData: any) {
    localStorage.setItem(`${authConfig.key}-user-data`, JSON.stringify(userData))
  }
  function GetUserData(): any | null {
    const userData = localStorage.getItem(`${authConfig.key}-user-data`)
    if (userData) return JSON.parse(userData)
    else return null
  }
  function GetRefreshTokenEndPoint(): any | null {
    return authConfig.refreshTokenEndPoint
  }

  function GetAccessToken() {
    const userData = GetUserData()
    if (userData && userData.accessToken) return userData.accessToken
    else return null
  }
  function GetAccessTokenDecoded(): RefreshTokenDecoded | null {
    if (GetAccessToken()) return jwtDecode(GetAccessToken() as string)
    else return null
  }

  function GetRefreshToken() {
    return GetUserData()?.refreshToken
  }

  // TODO                                            .
  function GetUserRoles() {
    return GetAccessTokenDecoded()?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
  }

  // function GetPermissions(): string[] {
  //   const permissionsArray: string[] = Object.values(Permissions_List);
  //   const userData = GetUserData();
  //   return userData.permissions;
  //   // return permissionsArray
  // }

  function IsAdmin() {
    return GetUserRoles()?.includes(BaseRoles.CompanySuperAdmin) || GetUserRoles()?.includes(BaseRoles.CompanyAdmin)
  }

  function IsBrandManager() {
    return GetUserRoles()?.includes(BaseRoles.BrandManager)
  }

  function IsCallCenter() {
    return GetUserRoles()?.includes(BaseRoles.CallCenterUser)
  }

  function IsWarehouseUser() {
    return GetUserRoles()?.includes(BaseRoles.WarehouseUser)
  }

  function ButtonsRoles(BtnTitle: string) {
    switch (BtnTitle) {
      case 'putlist': {
        if (IsAdmin() || !IsBrandManager()) return true
        else false
        break
      }
      case 'complete': {
        if (IsAdmin() || !IsBrandManager()) return true
        else false
        break
      }
      default:
        true
    }
  }

  function IsLoggedIn() {
    return !!GetAccessToken()
  }
  function LogOut() {
    localStorage.removeItem(`${config.key}-user-data`)
    localStorage.removeItem('rememberMe')
    router.push('/login')
  }
  function ActionsGaurd(name: string, action: string) {
    if (name === 'Public') return true

    return GetUserRoles()?.includes(`${name}-${action}`) || GetUserRoles()?.includes(BaseRoles.CompanySuperAdmin)
  }

  async function RefreshToken() {
    const userData = GetUserData()
    console.log('Refreshing token')
    try {
      const response = await axiosIns.post(config.refreshTokenEndPoint, {
        id: userData?.id,
        refreshToken: GetRefreshToken(),
      })

      const { accessToken } = response.data
      if (!accessToken) LogOut()

      if (accessToken && userData) {
        SetUserData({
          ...userData,
          accessToken,
        })
      }

      return accessToken
    } catch (error) {
      console.log('Refreshing token fails')

      LogOut()
    }
  }

  // any => LoginRequest
  function HandleLoginError(error: Error & AxiosError, requestBody: any) {
    console.log('error', error)

    if (error.response) {
      if (error.response.status === 404 || error.response.status === 403)
        return 'المستخدم غير موجود .. يرجى التحقق من صحة المعلومات'
      else if (error.response.status === 400) return 'كلمة المرور خاطئة .. يرجى التأكد من حالة الأحرف '
      else if (error.response.status === 500) return 'حدث خطأ في الخادم .. يرجى اعادة المحاولة'
      else return 'حدث خطأ ما'
    } else {
      return 'فشلت العملية'
    }
  }

  function GetHomePage() {
    const userRole = GetUserRoles()
    switch (userRole) {
      case BaseRoles.CompanySuperAdmin:
        return '/'
      case BaseRoles.CompanyAdmin:
        return '/'
      case BaseRoles.WarehouseUser:
        return '/content-management/orders'
      case BaseRoles.BrandManager:
        return '/'
    }
  }

  return {
    GetAccessToken,
    IsAdmin,
    IsBrandManager,
    ButtonsRoles,
    GetRefreshToken,
    GetUserRoles,
    IsLoggedIn,
    LogOut,
    GetUserData,
    ActionsGaurd,
    GetAccessTokenDecoded,
    RefreshToken,
    Login,
    SetUserData,
    GetHomePage,
    BaseRoles,
    IsCallCenter,
    IsWarehouseUser,
    GetRefreshTokenEndPoint,
  }
}
