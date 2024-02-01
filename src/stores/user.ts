import { ref } from 'vue'
import { defineStore } from 'pinia'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { login } from '@/api/users/index'
import type { LoginForm } from '@/api/users/type'

const useUserStore = defineStore('User', () => {
  const token = ref<string | null>('')
  token.value = GET_TOKEN()
  const userLogin = async (data: LoginForm) => {
    await login(data).then((res) => {
      if (res.code == 200) {
        token.value = res.data
        SET_TOKEN(res.data)
        return Promise.resolve(res)
      } else return Promise.reject(res)
    })
  }
  return {
    token,
    userLogin
  }
})

export default useUserStore
