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
          <!-- <el-table-column prop="_id" label="ID" width="240"></el-table-column> -->
          <el-table-column :label="$t('icon')">
            <template slot-scope="scope">
              <div class="table-cell-img">
                <img :src="scope.row.icon | fileUrl" alt="">
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="name" :label="$t('goodsName')"></el-table-column>
          <el-table-column fixed="right" :label="$t('operation')" width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">{{$t('edit')}}</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row)">{{$t('delete')}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <ItemEdit v-if="isShowType('add')" @cancel="cancelAdd" @sure="query()" :data="editItem" />
  </div>
</template>

<script>
import ItemEdit from '../components/ItemEdit'
import { item } from '../script/api/get-data'
export default {
  name: 'templates',
  components: {
    ItemEdit
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
      item.query().then(res => {
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
        item.delete({ id: deleteItem._id }).then(res => {
          console.log(res)
          this.query()
        })
      }).catch(() => {

      })
    }
  }
}
</script>
