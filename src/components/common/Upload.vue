<template>
  <el-upload
    class="avatar-uploader"
    :action="apiUrl"
    :show-file-list="false"
    :on-success="uploadSuccess"
  >
    <img v-if="url" :src="url| fileUrl" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>
<script>
import { environment } from '../../models/environment'
export default {
  name: 'upload',
  props: ['data'],
  data () {
    return {
      url: this.data || '',
      apiUrl: environment.API_URL + '/admin/api/upload'
    }
  },
  watch: {
    data: function (val) {
      this.url = val
    },
    url: function (val) {
      this.$emit('update:data', this.url)
    }
  },
  mounted () {
  },
  methods: {
    uploadSuccess: function (res) {
      this.url = res.filename
    }
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
