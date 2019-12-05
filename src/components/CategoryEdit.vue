<template>
  <div class="form-add">
    <div class="form-container">
      <div class="form-header">
        <el-button @click="cancel">{{$t('cancel')}}</el-button>
        <el-button type="primary" @click="sure">{{$t('save')}}</el-button>
      </div>
      <div class="form-content">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item :label="$t('subClassify')">
            <el-select v-model="form.parent">
              <el-option
                v-for="item in parents"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('classifyName')">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { category } from '../script/api/get-data'
export default {
  name: 'CategoryEdit',
  props: ['data'],
  data () {
    return {
      form: {
        parent: '',
        name: ''
      },
      parents: []
    }
  },
  mounted () {
    this.getParents()
    if (this.data && this.data._id) {
      category.detail({ id: this.data._id }).then(res => {
        this.form = res
      })
    }
  },
  methods: {
    sure: function () {
      let req = category.add
      if (this.form && this.form._id) {
        req = category.update
      }
      if (!this.form.parent) {
        delete this.form.parent
      }
      req(this.form).then(res => {
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
    },

    getParents: function () {
      category.query().then(res => {
        this.parents = res
      })
    }
  }
}
</script>
