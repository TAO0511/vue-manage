<template>
  <div class="login">
    <div class="login-bg"></div>

    <div class="login-content">
      <!-- <el-form ref="form" :model="form" label-width="80px">
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
      </el-form>-->
      <div class="login-title">登录</div>
      <div class="input-item">
        <el-input placeholder="请输入账号" v-model="form.account">
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
      </div>
      <div class="input-item">
        <el-input placeholder="请输入密码" v-model="form.password" type="password">
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </div>
      <div class="input-item text-right">
        <el-checkbox v-model="form.remeber">记住密码</el-checkbox>
      </div>
      <div class="input-item">
        <el-button type="primary" @click="login" style="width:100%;">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { setItem } from '../script/config/common'
export default {
  name: 'login',
  mounted () {
    this.openNotify()
  },
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
      if (this.form.account == 'admin' && this.form.password == '111111') {
        this.loginSuccess()
      } else {
        this.loginFail()
      }
      setItem('useInfo', this.form)
    },

    loginSuccess () {
      this.$router.push('/dashboard')
    },

    loginFail () {
      this.$message.error('账号或者密码输入错误')
    },

    openNotify () {
      this.$notify.info({
        title: '登录方式提示',
        message: '账号：admin  密码：111111'
      })
    }
    
  }
}
</script>
<style lang="scss">
.login {
  height: 100%;
  width: 100%;
  padding: 0;

  .login-bg {
    background-color: #409eff;
    width: 100%;
    height: 300px;
  }

  .login-content {
    width: 400px;
    min-height: 300px;
    padding: 0px 40px 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    background: #ffffff;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: 0 3px 10px #ccc;

    .login-title {
      font-size: 24px;
      margin: 20px 0;
    }

    .input-item {
      margin-bottom: 20px;
    }
  }
}
</style>
