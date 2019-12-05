<template>
  <div class="templates">
    <div v-if="isShowType('list')">
      <div class="filter-container">
        <el-row :gutter="20">
          <el-button type="primary" class="pull-left" @click="add()">{{$t('add')}}</el-button>
        </el-row>
      </div>
      <div class="table-list">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column label="头像">
            <template slot-scope="scope">
              <div class="table-cell-img ">
                <img :src="scope.row.avatar | fileUrl" alt="">
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="name" :label="$t('name')"></el-table-column>
          <el-table-column :label="$t('categories')">
            <template slot-scope="scope">
              <div>{{getCategories(scope.row)}}</div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" :label="$t('operation')" width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">{{$t('edit')}}</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row)">{{$t('delete')}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <HeroEdit v-if="isShowType('add')" @cancel="cancelAdd" @sure="query()" :data="editItem" />
  </div>
</template>

<script>
import HeroEdit from '../components/HeroEdit'
import { hero } from '../script/api/get-data'
export default {
  name: 'templates',
  components: {
    HeroEdit
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
      hero.query().then(res => {
        this.tableData = res
      })
    },
    cancelAdd () {
      this.showType = 'list'
    },
    handleEdit (item) {
      this.editItem = item
      this.showType = 'add'
    },
    handleDelete (deleteItem) {
      this.$confirm(`确定删除【${deleteItem.name}】吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        hero.delete({ id: deleteItem._id }).then(res => {
          console.log(res)
          this.query()
        })
      }).catch(() => {

      })
    },
    getCategories (item) {
      let categories = (item.categories || []).map(category => {
        return category.name
      })
      return categories.join('、')
    }
  }
}
</script>
