<template>
  <div class="form-add">
    <div class="form-container">
      <div class="form-header">
        <el-button @click="cancel">{{$t('cancel')}}</el-button>
        <el-button type="primary" @click="sure">{{$t('save')}}</el-button>
      </div>
      <div class="form-content">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item :label="$t('title')">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item :label="$t('content')">
            <vue-editor v-model="form.content" />
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { article } from '../script/api/get-data'
// import Upload from '../components/common/Upload'
import { VueEditor } from 'vue2-editor'
export default {
  name: 'ArticleEdit',
  props: ['data'],
  components: {
    VueEditor
  },
  data () {
    return {
      form: {
        title: '',
        icon: ''
      }
    }
  },
  mounted () {
    this.getParents()
    if (this.data && this.data._id) {
      article.detail({ id: this.data._id }).then(res => {
        this.form = res
      })
    }
  },
  methods: {
    sure: function () {
      let req = article.add
      if (this.form && this.form._id) {
        req = article.update
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
      article.query().then(res => {
        this.parents = res
      })
    }
  }
}
</script>