<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="请输入用户名">
        <template #prefix>
          <el-icon class="el-input__icon">
            <user />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" show-password>
        <template #prefix>
          <el-icon class="el-input__icon">
            <lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
  </el-form>
  <div class="login-btn">
    <el-button round size="large" @click="reset"> 重置 </el-button>
    <el-button round size="large" type="primary" :loading="loading" @click="login">
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/stores/user'
import type { ElForm } from 'element-plus'
import type { LoginForm } from '@/api/users/type'
type FormInstance = InstanceType<typeof ElForm>

const loginFormRef = ref<FormInstance>()
const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const loading = ref(false)
const loginForm = reactive<LoginForm>({
  username: 'admin',
  password: '123456'
})

const reset = () => {
  loginFormRef.value?.resetFields()
}

const userStore = useUserStore()
const router = useRouter()
const login = () => {
  loginFormRef.value?.validate((valid) => {
    if (valid) {
      loading.value = true
      userStore.userLogin(loginForm).then(() => {
        // router.push('/')
        ElMessage({
          type: 'success',
          message: '登录成功'
        })
        loading.value = false
      })
    }
  })
}
</script>

<style lang="scss" scoped></style>
