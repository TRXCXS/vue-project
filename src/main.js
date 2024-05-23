// 这里的vue是模块名称，而不是实际的文件路径。
// import Vue from 'vue' 这一行代码是从Node_modules目录中导入Vue.js库的。
import Vue from 'vue'
// 导入App.vue文件，在这个文件中使用App来操作它
import App from './App.vue'
// 导入./router目录下的某个默认导出文件，最常见的情况是index.js
import router from './router'

// 设置为false时，不会在生产环境中显示Vue的生产提示信息。
Vue.config.productionTip = false

new Vue({
    router, // ES6: router: router，属性名和属性名之后的名字一样的时候，可以简写为属性名
    render: h => h(App)
}).$mount('#app')

// 1. new Vue({...}) 创建一个Vue实例
// 2. $mount('#app') 将该Vue实例挂载到页面中id为app的元素上，即该实例会替换该元素内的内容
// 3. router是一个路由对象，用于管理页面的路由
// 4. render: h => h(App) 是一个渲染函数，用于指定如何渲染页面，这里的App是一个Vue组件
//   4.1 h(App)：调用 h 函数(createElement 函数)，传入 App 组件作为参数，这意味着 App 组件将作为根组件被渲染。
//   4.2 Vue 会使用这个组件来构建整个应用程序的 VDOM(虚拟 DOM) 树
