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
  }
]
