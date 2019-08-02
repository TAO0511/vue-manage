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
          <el-button type="primary" class="pull-left" @click="add()">新增</el-button>
          <el-col :span="6">
            <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="query()"></el-button>
            </el-input>
          </el-col>
        </el-row>
      </div>
      <div class="table-list">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column label="日期" width="180">
            <template slot-scope="scope">{{ scope.row.date | date }}</template>
          </el-table-column>
          <el-table-column prop="name" label="联系人" width="180"></el-table-column>
          <el-table-column prop="phone" label="联系方式" min-width="180"></el-table-column>
          <el-table-column prop="address" label="地址" min-width="300" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="标签" width="180">
            <template slot-scope="scope">{{scope.row.type | addressTag}}</template>
          </el-table-column>
          <el-table-column label="是否默认地址" width="120">
            <template slot-scope="scope">{{scope.row.isDefault ? '是' : '否'}}</template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
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
import AddressAdd from '../components/address/AddressAdd'
import { getItem, setItem } from '../script/config/common'
export default {
  name: 'templates',
  components: {
    AddressAdd
  },
  created () {
    
  },
  mounted () {
    this.query()
    console.log(this.$route)
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
      this.tableData = getItem('addressList')
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
      let addressList = (this.tableData || []).filter(item => {
        return item.id !== deleteItem.id
      })
      setItem('addressList', addressList)
      this.query()
    }
  }
}
</script>
