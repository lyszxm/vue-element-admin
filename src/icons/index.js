import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)

/*
https://webpack.docschina.org/guides/dependency-management/#requirecontext
https://juejin.cn/post/6844903517564436493#heading-7
require.context有三个参数：返回context module
  directory：说明需要检索的目录
  useSubdirectories：是否检索子目录
  regExp: 匹配文件的正则表达式

一个 context module 会导出一个（require）函数，此函数可以接收一个参数：request。
此导出函数有三个属性：resolve, keys, id。
  resolve 是一个函数，它返回 request 被解析后得到的模块 id。
  keys 也是一个函数，它返回一个数组，由所有可能被此 context module 处理的请求
*/
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

// 之后我们增删改图标直接直接文件夹下对应的图标就好了，什么都不用管，就会自动生成 svg symbol了。
