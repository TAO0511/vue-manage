<template>
  <div class="form-add">
    <div class="form-container">
      <div class="form-header">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="sure">保存</el-button>
      </div>
      <div class="form-content">
        <el-form ref="form" :model="form" label-width="100px">
          <el-tabs value="basic" type="border-card">
            <el-tab-pane label="基础信息" name="basic">
              <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="称号">
                <el-input v-model="form.title"></el-input>
              </el-form-item>
              <el-form-item label="头像">
                <Upload :data.sync="form.avatar"></Upload>
                {{form.avatar}}
              </el-form-item>
              <el-form-item label="Banner">
                <Upload :data.sync="form.banner"></Upload>
              </el-form-item>
              <el-form-item label="类型">
                <el-select v-model="form.categories" multiple>
                  <el-option
                    v-for="item of categories"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="难度">
                <el-rate style="margin-top:0.6rem" :max="9" v-model="form.scores.difficult"></el-rate>
              </el-form-item>
              <el-form-item label="技能">
                <el-rate style="margin-top:0.6rem" :max="9" v-model="form.scores.skills"></el-rate>
              </el-form-item>
              <el-form-item label="攻击">
                <el-rate style="margin-top:0.6rem" :max="9" v-model="form.scores.attack"></el-rate>
              </el-form-item>
              <el-form-item label="生存">
                <el-rate style="margin-top:0.6rem" :max="9" v-model="form.scores.survive"></el-rate>
              </el-form-item>

              <el-form-item label="顺风出装">
                <el-select v-model="form.items1" multiple>
                  <el-option
                    v-for="item of items"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="逆风出装">
                <el-select v-model="form.items2" multiple>
                  <el-option
                    v-for="item of items"
                    :key="item._id"
                    :label="item.name"
                    :value="item._id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="使用技巧">
                <el-input type="textarea" v-model="form.usageTips"></el-input>
              </el-form-item>
              <el-form-item label="对抗技巧">
                <el-input type="textarea" v-model="form.battleTips"></el-input>
              </el-form-item>
              <el-form-item label="团战思路">
                <el-input type="textarea" v-model="form.teamTips"></el-input>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="技能" name="skills">
              <el-button size="small" @click="form.skills.push({})">
                <i class="el-icon-plus"></i> 添加技能
              </el-button>
              <el-row type="flex" style="flex-wrap: wrap">
                <el-col :md="12" v-for="(item, i) in form.skills" :key="i">
                  <el-form-item label="名称">
                    <el-input v-model="item.name"></el-input>
                  </el-form-item>
                  <el-form-item label="图标">
                    <Upload :data.sync="item.icon"></Upload>
                  </el-form-item>
                  <el-form-item label="冷却值">
                    <el-input v-model="item.delay"></el-input>
                  </el-form-item>
                  <el-form-item label="消耗">
                    <el-input v-model="item.cost"></el-input>
                  </el-form-item>
                  <el-form-item label="描述">
                    <el-input v-model="item.description" type="textarea"></el-input>
                  </el-form-item>
                  <el-form-item label="小提示">
                    <el-input v-model="item.tips" type="textarea"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button size="small" type="danger" @click="form.skills.splice(i, 1)">删除</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-tab-pane>

            <el-tab-pane label="最佳搭档" name="partners">
              <el-button size="small" @click="form.partners.push({})">
                <i class="el-icon-plus"></i> 添加英雄
              </el-button>
              <el-row type="flex" style="flex-wrap: wrap">
                <el-col :md="12" v-for="(item, i) in form.partners" :key="i">
                  <el-form-item label="英雄">
                    <el-select filterable v-model="item.hero">
                      <el-option
                        v-for="hero in heroes"
                        :key="hero._id"
                        :value="hero._id"
                        :label="hero.name"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="描述">
                    <el-input v-model="item.description" type="textarea"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button size="small" type="danger" @click="form.partners.splice(i, 1)">删除</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { hero, category, item } from '../script/api/get-data'
import { environment } from '../models/environment'
import Upload from './common/Upload'
export default {
  name: 'HeroEdit',
  props: ['data'],
  components: {
    Upload
  },
  data () {
    return {
      form: {
        name: '',
        icon: '',
        categories: '',
        avatar: '',
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        },
        items1: [],
        items2: [],
        usageTips: '',
        battleTips: '',
        teamTips: '',
        skills: [],
        partners: []
      },
      categories: [],
      items: [],
      heroes: [],
      apiUrl: environment.API_URL + '/admin/api/upload'
    }
  },
  created () {
    this.getCategories()
    this.getItems()
    this.getHeroes()
    if (this.data && this.data._id) {
      hero.detail({ id: this.data._id }).then(res => {
        this.form = res
      })
    }
  },
  methods: {
    sure: function () {
      let req = hero.add
      if (this.form && this.form._id) {
        req = hero.update
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

    getCategories: function () {
      category.query().then(res => {
        this.categories = res
      })
    },

    getItems: function () {
      item.query().then(res => {
        this.items = res
      })
    },

    getHeroes: function () {
      hero.query().then(res => {
        this.heroes = res
      })
    }
  }
}
</script>
