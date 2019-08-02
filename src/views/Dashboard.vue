<template>
  <div id="dashboard">
    <el-container class="app-container">
      <el-header class="app-header">
        <div class="header-left"></div>
        <div class="header-right">
          <span style="margin-right:15px;">Kenter</span>
          <el-dropdown @command="handleCommand">
            <i class="el-icon-setting header-icon"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="updatePassword">修改密码</el-dropdown-item>
              <el-dropdown-item command="signOut">安全退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <el-aside class="app-aside" style="width:200px;text-align:left;">
          <el-menu
            :default-active="activeMenu"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            style="height:100%;"
          >
            <div v-for="nav in navResource" v-bind:key="nav.id">
              <el-submenu :index="nav.index" v-if="nav.children && nav.children.length > 0">
                <template slot="title">
                  <i :class="nav.icon"></i>
                  <span>{{nav.value}}</span>
                </template>
                <el-menu-item
                  :index="item.index"
                  @click="navTo(item.path)"
                  v-for="item in nav.children"
                  :key="item.$index"
                >{{item.value}}</el-menu-item>
              </el-submenu>
              <el-menu-item :index="nav.index" @click="navTo(nav.path)" v-else>
                <i :class="nav.icon"></i>
                <span slot="title">{{nav.value}}</span>
              </el-menu-item>
            </div>
          </el-menu>
        </el-aside>
        <el-main class="app-main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { signOut } from '../script/config/common';
import { navResource } from '../models/fake-data'
export default {
  name: 'dashboard',
  data () {
    return {
      navResource: navResource,
      activeMenu: '1'
    }
  },
  beforeCreate () {
    console.log('beforeCreate++++++')
  },
  created () {
    console.log('created++++++')
  },
  beforeMount () {
    console.log('beforeMount++++++')
  },
  mounted () {
    // debugger
    this._initNav();
    console.log('mounted++++++')
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    navTo (url) {
      this.$router.push(url)
    },
    handleCommand (command) {
      console.log('command', command);
      switch (command) {
        case 'signOut':
          signOut(this.$router)
          break;

        default:
          break;
      }
    },
    _initNav () {
      let currentRoutePath = this.$router.currentRoute.path;
      for (let index = 0; index < (navResource || []).length; index++) {
        const nav = navResource[index];
        if (nav.path === currentRoutePath) {
          this.activeMenu = nav.index;
          break;
        }
        for (let i = 0; i < (nav.children || []).length; i++) {
          const item = nav.children[i];
          if (item.path === currentRoutePath) {
            this.activeMenu = item.index;
            break;
          }
        }
      }
      console.log(this.$router.currentRoute.path);
    }
  },

}
</script>

<style lang="scss">
#dashboard {
  height: 100%;
}
.app-container {
  height: 100%;
  .app-header {
    // background-color: #b3c0d1;
    background-color: rgb(84, 92, 100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    .header-left {
    }
    .header-right {
      width: 300px;
      text-align: right;
    }
    .header-icon {
      // margin-right: 15px;
      color: #fff;
    }
  }
  .app-aside {
    width: 250px;
  }
  .app-main {
  }
}
</style>
