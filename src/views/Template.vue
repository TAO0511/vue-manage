<template>
  <div class="templates">
    <div v-if="isShowType('list')">
      <div class="filter-container">
        <!-- <el-row :gutter="20">
        <el-button type="primary" size="small" class="pull-left">新增</el-button>
        <el-col :span="6">
          <div class="filter-item">
            <label>姓名：</label>
            <el-input placeholder="请输入姓名搜索" v-model="search" size="small"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" size="small">查询</el-button>
          <el-button size="small">清空条件</el-button>
        </el-col>
        </el-row>-->
        <el-row :gutter="20">
          <el-button type="primary" class="pull-left" @click="add()">{{$t('add')}}</el-button>
          <el-col :span="6">
            <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="query()"></el-button>
            </el-input>
          </el-col>
        </el-row>
      </div>
      <div class="table-list">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column :label="$t('date')" width="180">
            <template slot-scope="scope">{{ scope.row.date | date }}</template>
          </el-table-column>
          <el-table-column prop="name" :label="$t('contactPerson')" width="180"></el-table-column>
          <el-table-column prop="phone" :label="$t('phoneNo')" min-width="180"></el-table-column>
          <el-table-column prop="address" :label="$t('address')" min-width="300" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column :label="$t('tag')" width="180">
            <template slot-scope="scope">{{scope.row.type | addressTag}}</template>
          </el-table-column>
          <el-table-column :label="$t('isDefaultAddress')" width="120">
            <template slot-scope="scope">{{scope.row.isDefault ? '是' : '否'}}</template>
          </el-table-column>
          <el-table-column fixed="right" :label="$t('operation')" width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">{{$t('edit')}}</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row)">{{$t('delete')}}</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="paginator">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="paginator.pageNo"
            :page-sizes="[10, 50, 100, 200]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </div>
      </div>
    </div>
    <AddressAdd v-if="isShowType('add')" @cancel="cancelAdd" @sure="query()" :data="editItem" />
  </div>
</template>

<script>
import AddressAdd from '../components/AddressAdd'
import { address } from '../script/api/get-data'
export default {
  name: 'templates',
  components: {
    AddressAdd
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
      paginator: {
        pageNo: 1,
        pageSize: 100
      },
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
      address.query().then(res => {
        this.tableData = res
      })
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    cancelAdd () {
      this.showType = 'list'
    },
    handleEdit (item) {
      this.editItem = item
      this.showType = 'add'
    },
    handleDelete (deleteItem) {
      this.$confirm(`确定删除地址【${deleteItem.name}】吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        address.delete({ id: deleteItem._id }).then(res => {
          console.log(res)
          this.query()
        })
      }).catch(() => {
        
      })
    }
  }
}
</script>
