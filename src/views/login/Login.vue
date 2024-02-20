<template>
  <div class="login-container flx-center">
    <div class="login-box content-layout">
      <div class="login-form">
        <div class="login-logo">
          <!-- <img class="login-icon" src="@/assets/images/logo.png" /> -->
          <h2 class="logo-text">枫羽商城</h2>
        </div>
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名,admin">
              <template #prefix>
                <el-icon class="el-input__icon">
                  <user />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码,123456"
              show-password
            >
              <template #prefix>
                <el-icon class="el-input__icon">
                  <lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <div class="login-btn">
          <el-button round size="large" @click="reset">重置</el-button>
          <el-button
            round
            v-throttle
            size="large"
            type="primary"
            :loading="loading"
            @click="onSave"
          >
            {{ status == 'login' ? '登录' : '注册' }}
          </el-button>
        </div>
        <div class="login-link">
          <el-button v-if="status == 'login'" link @click="changeStatus('register')"
            >快速注册</el-button
          >
          <el-button v-else link @click="changeStatus('login')">已有账号,去登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
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

const loginForm = reactive<LoginForm>({
  username: 'admin',
  password: '123456'
})

const reset = () => {
  loginFormRef.value?.resetFields()
  loginForm.username = ''
  loginForm.password = ''
}

const onSave = () => {
  loginFormRef.value?.validate((valid) => {
    if (valid && status.value == 'login') login()
    else if (valid && status.value == 'register') register()
  })
}
const loading = ref(false)
const userStore = useUserStore()
const router = useRouter()
const login = () => {
  let params = {
    ...loginForm,
    password: userStore.passwordEncrypt(loginForm.password, [3, 6, 8], ['o', 'n', 'e'])
  }

  loading.value = true
  userStore
    .userLogin(params)
    .then(() => {
      router.push('/')
      ElMessage({
        type: 'success',
        message: '登录成功'
      })
      loading.value = false
    })
    .catch(() => {
      loading.value = false
    })
}

const register = () => {
  let params = {
    ...loginForm,
    password: userStore.passwordEncrypt(loginForm.password, [3, 6, 8], ['o', 'n', 'e'])
  }
  loading.value = true
  userStore
    .userRegister(params)
    .then(() => {
      ElMessage({
        type: 'success',
        message: '注册成功'
      })
      login()
      loading.value = false
    })
    .catch(() => {
      loading.value = false
    })
}

// 用于区分是注册还是登录
let status = ref('login')
const changeStatus = (value: string) => {
  reset()
  status.value = value
}
onMounted(() => {
  const route = useRoute()
  status.value = route.query?.status as string
})
</script>

<style lang="scss" scoped>
.login-container {
  height: 600px;
  min-height: 600px;
  background-color: #eeeeee;
  background-image: url('@/assets/images/login_bg.jpg');
  background-size: 100% 100%;
  background-size: cover;
  background-position: 50%;
  .login-box {
    height: 600px;
    .login-form {
      position: absolute;
      top: 120px;
      right: 60px;
      width: 420px;
      padding: 50px 40px 40px;
      background-color: var(--el-bg-color);
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 10%) 0 2px 10px 2px;
      .login-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 45px;
        .login-icon {
          width: 60px;
          height: 52px;
        }
        .logo-text {
          padding: 0 0 0 25px;
          margin: 0;
          font-size: 34px;
          font-weight: bold;
          color: #34495e;
          white-space: nowrap;
        }
      }
      .el-form-item {
        margin-bottom: 40px;
      }
      .login-btn {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 40px;
        white-space: nowrap;
        .el-button {
          width: 185px;
        }
      }
      .login-link {
        float: right;
        margin-top: 12px;
      }
    }
  }
}

@media screen and (width <= 1250px) {
  .login-left {
    display: none;
  }
}

@media screen and (width <= 600px) {
  .login-form {
    width: 97% !important;
  }
}
</style>
