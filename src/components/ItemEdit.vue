<template>
  <div class="form-add">
    <div class="form-container">
      <div class="form-header">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="sure">保存</el-button>
      </div>
      <div class="form-content">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="物品名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="图标">
            <Upload :data.sync="form.icon"></Upload>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { item } from '../script/api/get-data'
import Upload from '../components/common/Upload'
export default {
  name: 'ItemEdit',
  props: ['data'],
  components: {
    Upload
  },
  data () {
    return {
      form: {
        name: '',
        icon: ''
      }
    }
  },
  mounted () {
    this.getParents()
    if (this.data && this.data._id) {
      item.detail({ id: this.data._id }).then(res => {
        this.form = res
      })
    }
  },
  methods: {
    sure: function () {
      let req = item.add
      if (this.form && this.form._id) {
        req = item.update
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
      item.query().then(res => {
        this.parents = res
      })
    }
  }
}
</script>