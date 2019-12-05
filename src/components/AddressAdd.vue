<template>
  <div class="form-add">
    <div class="form-container">
      <div class="form-header">
        <el-button @click="cancel">{{$t('cancel')}}</el-button>
        <el-button type="primary" @click="sure">{{$t('save')}}</el-button>
      </div>
      <div class="form-content">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item :label="$t('contactPerson')">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item :label="$t('phoneNo')">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item :label="$t('address')">
            <el-input type="textarea" v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item :label="$t('tag')">
            <el-radio-group v-model="form.type">
              <el-radio :label="1" name="type">{{$t('company')}}</el-radio>
              <el-radio :label="2" name="type">{{$t('home')}}</el-radio>
              <el-radio :label="3" name="type">{{$t('school')}}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="$t('setDefaultAddress')">
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
