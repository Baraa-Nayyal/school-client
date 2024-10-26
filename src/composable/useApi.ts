// ! DONT TOUCH THIS FILE

import { axiosIns } from '@/plugins/axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { serialize } from 'object-to-formdata'
import type { SweetAlertOptions } from 'sweetalert2'
import Swal from 'sweetalert2'
import { useToast } from 'vue-toastification'
import { useAuth } from './useAuth'

interface NotificationsType {
  error?: string | boolean
  comfirm?: SweetAlertOptions | boolean
  success?: string | boolean
}
interface paramsType {
  [param: string]: any
}
const defaultSerializerOptions = {
  indices: true,
  dotsForObjectNotation: true,
  noFilesWithArrayNotation: true,
}

const defaultPostNotifications: NotificationsType = {
  comfirm: false,
  success: false,
  error: true,
}

const defaultGetNotification: NotificationsType = {
  comfirm: false,
  success: false,
  error: true,
}

const defaultDeleteNotification: NotificationsType = {
  comfirm: {
    text: 'سيتم حذف العنصر المحدد .. هل انت متأكد ؟ ',
    icon: 'warning',
    confirmButtonText: 'نعم',
    cancelButtonText: 'تراجع',
  },
  error: true,
  success: 'تم الحذف بنجاح',
}

export const useApi = () => {
  // const locale = ref(themeConfig.app.i18n.langConfig);
  const toast = useToast()

  //Global error handler
  const handleErrorMessage = ({ response }: AxiosError | any, notifications: string | boolean) => {
    if (typeof notifications == 'boolean' && response) {
      if (response.data) {
        if (Array.isArray(response.data.message)) {
          const errorMessage = response.data.message.join('\n')
          toast.error(errorMessage, { timeout: 5000 })
        } else {
          toast.error(response.data.message)
        }
      }
      if (response.message) {
        toast.error(response.message)
      }
      if (response.status == 403) {
        const { LogOut } = useAuth()
        LogOut()
      }
      if (response.statusText) {
        toast.error(response.statusText)
      } else {
        toast.error('Unknown Error, Please report to system admin.')
      }
    } else if (typeof notifications == 'string') {
      toast.error(notifications)
    }

    // Old logic
    // if (typeof notifications == "boolean" && response) {
    //   if (response.data) {
    //     //server error -> 500
    //     for (const key in response.data) {
    //       if (key == "message")
    //         toast.error(response.data[key], { timeout: 10000 });
    //     }

    //     //Validation Error -> 400
    //     if (response.data.errors) {
    //       for (const key in response.data.errors) {
    //         if (
    //           Object.prototype.hasOwnProperty.call(response.data.errors, key)
    //         ) {
    //           const errorType = response.data.errors[key];
    //           if (
    //             typeof errorType == "object" &&
    //             key != "request" &&
    //             Array.isArray(errorType)
    //           ) {
    //             errorType.forEach((msg) => {
    //               toast.error(msg);
    //             });
    //           }
    //         }
    //       }
    //     }
    //   } else if (response.message) {
    //     toast.error(response.message);
    //   } else if (response.statusText) {
    //     toast.error(response.statusText);
    //   } else if (response.status == 401) {
    //     toast.warning("You must be logged in! Please login first");
    //   } else {
    //     toast.error("Unknown Error, Please report to system admin.");
    //   }
    // } else if (typeof notifications == "string") {
    //   toast.error(notifications);
    // }
  }

  const GET = async <T>(
    url: string,
    params?: paramsType,
    notifications: NotificationsType = defaultGetNotification,
    config?: AxiosRequestConfig,
  ) => {
    try {
      const response = await axiosIns.get<T>(url, {
        params: { ...params },
        ...config,
        headers: {
          lang: localStorage.getItem('afak-language'),
        },
      })

      return { ...response, data: response.data as T }
    } catch (error) {
      if (notifications.error) handleErrorMessage(error, notifications.error)

      throw error
    }
  }

  const POST = async <ResT, ReqT>(
    url: string,
    body: ReqT,
    notifications: NotificationsType = defaultPostNotifications,
    config: AxiosRequestConfig & { formData?: boolean } = {},
  ) => {
    try {
      let response
      if (config.formData) {
        response = await axiosIns.post<ReqT, AxiosResponse<ResT>, FormData>(
          url,
          serialize(body, defaultSerializerOptions),
          {
            ...config,
            headers: {
              lang: localStorage.getItem('afak-language'),
            },
          },
        )
      } else {
        response = await axiosIns.post<ReqT, AxiosResponse<ResT>, ReqT>(
          url,
          { ...body },
          {
            ...config,
            headers: {
              lang: localStorage.getItem('afak-language'),
            },
          },
        )
      }

      if (notifications.success && (response.status === 200 || response.status === 201)) {
        if (typeof notifications.success == 'string') toast.success(notifications.success)
        else toast.success('success')
      }

      return response
    } catch (error) {
      if (notifications.error) {
        handleErrorMessage(error, notifications.error)
        throw error
      }
    }
  }

  const DELETE = async (
    url: string,
    body: any,
    params?: paramsType,
    notifications?: NotificationsType,
    config?: AxiosRequestConfig,
  ) => {
    let lang = document.documentElement.lang || 'en'

    const notify = notifications ? notifications : defaultDeleteNotification

    return new Promise((resolve, reject) => {
      if (notify.comfirm && typeof notify.comfirm == 'object') {
        Swal.fire({
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          ...notify.comfirm,
        }).then(result => {
          if (result.isConfirmed) {
            axiosIns
              .delete(url, { params, ...config, data: body })
              .then((res: any) => {
                if (res.status === 200 && typeof notify.success == 'string') toast.success(notify.success)

                resolve(res)
              })
              .catch((er: any) => {
                if (typeof notify.error === 'boolean' || typeof notify.error === 'string')
                  handleErrorMessage(er, notify.error)
                reject(er)
              })
          }
        })
      } else {
        axiosIns
          // .delete(url, { ...params, ...config })
          .delete(url, { params, ...config, data: body })
          .then((res: any) => {
            if (res.status === 200 && typeof notify.success == 'string') toast.success(notify.success)

            resolve(res)
          })
          .catch((er: any) => {
            if (typeof notify.error === 'boolean' || typeof notify.error === 'string')
              handleErrorMessage(er, notify.error)
            reject(er)
          })
      }
    })
  }

  return {
    GET,
    POST,
    DELETE,
  }
}
