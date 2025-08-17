import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    // 非 HTTP 开头的需要拼接
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2.请求超时，默认 10s
    options.timeout = 100000
    // 3.添加小程序端请求头标识
    options.header = {
      ...options.header, // 保留原有的请求头
      'source-client': 'miniapp',
    }
    // 4.添加 token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header['Authorization'] = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

// 响应的结果
interface Data<T> {
  code: string
  msg: string
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 成功时返回数据
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401 未授权，清理用户信息
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(new Error('Unauthorized'))
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求失败',
          })
          reject(new Error('Unauthorized'))
        }
      },
      fail: (err) => {
        uni.showToast({ icon: 'none', title: '请求失败，请稍后再试' })
        reject(err)
      },
    })
  })
}
