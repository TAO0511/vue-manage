<template>
  <div class="form-add">
    <div class="form-container">
      <div class="form-header">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="sure">保存</el-button>
      </div>
      <div class="form-content">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="联系人">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input type="textarea" v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="标签">
            <el-radio-group v-model="form.type">
              <el-radio :label="1" name="type">公司</el-radio>
              <el-radio :label="2" name="type">家</el-radio>
              <el-radio :label="3" name="type">学校</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="设为默认地址">
            <el-switch v-model="form.isDefault"></el-switch>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
// import { setItem, getItem } from '../../script/config/common'
import { address } from '../script/api/get-data'
export default {
  name: 'AddressAdd',
  props: ['data'],
  data () {
    return {
      form: {
        name: '',
        phone: '',
        address: '',
        isDefault: false,
        type: '',
        date: new Date().getTime()
      }
    }
  },
  mounted () {
    if (this.data && this.data._id) {
      address.detail({ id: this.data._id }).then(res => {
        console.log(res)
        this.form = res
      })
    }
  },
  methods: {
    sure: function () {
      let req = address.add
      if (this.form && this.form._id) {
        req = address.update
      }
      req(this.form).then(res => {
        console.log('res+++++=', res)
        this.$message({
          message: `${this.form && this.form._id ? '修改' : '新增'}成功`,
          type: 'success'
        })
        this.$emit('sure')
        this.$emit('cancel')
      })
    },
    cancel: function () {
      this.$emit('cancel')
    }
  }
}
</script>
