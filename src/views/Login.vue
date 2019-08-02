<template>
  <div class="login">
    <div class="login-content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label>
          <el-checkbox-group v-model="form.remeber" style="text-align: right;">
            <el-checkbox label="记住密码" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { setItem } from '../script/config/common'
export default {
  name: 'login',
  data () {
    return {
      form: {
        account: '',
        password: '',
        remeber: ''
      }
    }
  },
  methods: {
    login () {
      console.log('form', this.form)
      setItem('useInfo', this.form)
      this.$router.push('/dashboard')
    }
  }
}
</script>
<style lang="scss">
.login {
  height: 100%;
  width: 100%;
  padding: 0;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-content {
  width: 400px;
}
</style>
