<template>
  <div class="templates">
    <div v-if="isShowType('list')">
      <div class="filter-container">
        <el-row :gutter="20">
          <el-button type="primary" class="pull-left" @click="add()">新增</el-button>
        </el-row>
      </div>
      <div class="table-list">
        <el-table :data="tableData" stripe style="width: 100%">
          <!-- <el-table-column prop="_id" label="ID" width="240"></el-table-column> -->
          <el-table-column label="图标">
            <template slot-scope="scope">
              <div class="table-cell-img">
                <img :src="scope.row.icon | fileUrl" alt="">
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="物品名称"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <ArticleEdit v-if="isShowType('add')" @cancel="cancelAdd" @sure="query()" :data="editItem" />
  </div>
</template>

<script>
import ArticleEdit from '../components/ArticleEdit'
import { article } from '../script/api/get-data'
export default {
  name: 'templates',
  components: {
    ArticleEdit
  },
  created () {

  },
  mounted () {
    this.query()
  },
  data () {
    return {
      search: '',
      showType: 'list',
      tableData: [],
      editItem: null
    }
  },

  methods: {
    add: function () {
      this.showType = 'add'
      this.editItem = null
    },
    isShowType: function (type) {
      return this.showType === type
    },
    query () {
      article.query().then(res => {
        this.tableData = res
      })
    },
    cancelAdd () {
      this.showType = 'list'
    },
    handleEdit (article) {
      this.editItem = article
      this.showType = 'add'
    },
    handleDelete (deleteItem) {
      this.$confirm(`确定删除【${deleteItem.name}】吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        article.delete({ id: deleteItem._id }).then(res => {
          console.log(res)
          this.query()
        })
      }).catch(() => {

      })
    }
  }
}
</script>
