<template>
  <div class="address-add">
    <div class="form-container">
      <div class="form-header">
        <el-button type="primary" @click="sure">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </div>
      <div class="form-content">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="联系人">
            <el-input v-model="form.name"></el-input>
            <!-- <input v-model="form.name" v-autoFocus> -->
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
import { setItem, getItem } from '../../script/config/common'
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
        type: [],
        date: new Date().getTime()
      }
    }
  },
  mounted () {
    this.form = this.data || this.form
  },
  methods: {
    sure: function () {
      let addressList = getItem('addressList') || []
      if (this.form && this.form.id) {
        let editIndex = ''
        addressList.forEach((item, index) => {
          if (item.id === this.form.id) {
            editIndex = index
          }
        })
        if (typeof (editIndex) === 'number') {
          addressList.splice(editIndex, 1, this.form)
        }
      } else {
        this.form.id = `address_${new Date().getTime()}`
        addressList.push(this.form)
      }
      setItem('addressList', addressList)
      this.$emit('sure')
      this.$emit('cancel')
    },
    cancel: function () {
      this.$emit('cancel')
    }
  }
}
</script>
