export const navResource = [{
  id: '1',
  path: '/home',
  name: 'home',
  value: '首页',
  index: '1',
  icon: 'el-icon-menu'
},
{
  id: '2',
  path: '/',
  name: '',
  value: '功能',
  index: '2',
  icon: 'el-icon-location',
  children: [
    {
      path: '/template',
      name: 'template',
      value: '模板',
      index: '2-1'
    },
    {
      path: '/about',
      name: 'about',
      value: '关于',
      index: '2-2'
    },
    {
      path: '/category',
      name: 'category',
      value: '分类',
      index: '2-3'
    },
    {
      path: '/item',
      name: 'item',
      value: '物品',
      index: '2-4'
    },
    {
      path: '/hero',
      name: 'hero',
      value: '英雄',
      index: '2-5'
    },
    {
      path: '/article',
      name: 'article',
      value: '文章',
      index: '2-6'
    }
  ]
}]

export const resource = [
  {
    path: '/dashboard',
    name: 'dashboard',
    value: '主页'
  },
  {
    path: '/home',
    name: 'home',
    value: '首页'
  },
  {
    path: '/about',
    name: 'about',
    value: '关于'
  },
  {
    path: '/template',
    name: 'template',
    value: '模板'
  },
  {
    path: '/category',
    name: 'category',
    value: '分类'
  },
  {
    path: '/item',
    name: 'item',
    value: '物品'
  },
  {
    path: '/hero',
    name: 'hero',
    value: '英雄'
  },
  {
    path: '/article',
    name: 'article',
    value: '文章'
  }
]
