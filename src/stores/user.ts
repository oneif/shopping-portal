import { ref } from 'vue'
import { defineStore } from 'pinia'
import { GET, SET } from '@/utils/localStorage'
import { login, register } from '@/api/users/index'
import type { LoginForm } from '@/api/users/type'
import md5 from 'md5'

const useUserStore = defineStore('User', () => {
  const token = ref<string | null>('')
  token.value = GET('TOKEN')

  const userLogin = async (data: LoginForm) => {
    await login(data).then((res) => {
      if (res.code == 200) {
        token.value = res.data
        SET('TOKEN', res.data)
        SET('username', data.username)
        return Promise.resolve(res)
      } else return Promise.reject(res)
    })
  }
  const userRegister = async (data: LoginForm) => {
    await register(data).then((res) => {
      console.log(res)
    })
  }

  // 加密方法
  const passwordEncrypt = (password: string, index: number[], value: string[]): string => {
    let encryptStr = ''
    if (index.length == 1) {
      encryptStr = md5(password.slice(0, index[0]) + value[0] + password.slice(index[0]))
    } else {
      return passwordEncrypt(
        password.slice(0, index[0]) + value[0] + password.slice(index[0]),
        index.slice(1),
        value.slice(1)
      )
    }
    return encryptStr
  }

  return {
    token,
    userLogin,
    userRegister,
    passwordEncrypt
  }
})

export default useUserStore
