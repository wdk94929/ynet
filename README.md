#使用vue+vue全家桶+elementUI创建应用
 #使用脚手架vue-cli+webpack构建
  #安装淘宝镜像
   npm install -g cnpm --registry=https://registry.npm.taobao.org
  #全局安装vue-cli
   npm install vue-cli -g
   cnpm install vue-cli -g
  #全局安装wbpack
   npm install webpack -g
   cnpm install webpack -g
  #初始化工程
   vue init webpack-simple 工程名字<工程名字不能用中文>
  #安装依赖
   npm install
   cnpm install
 #vue全家桶+axios+elementUI
  #路由 状态管理器
   cnpm install vue-router vuex --save
   src下面的main.js下面引用vue-router，vuex
  #vue-resouce由于官方不再维护，现在推荐使用axios,由于axios支持JSONP,所以我们需要安装中间件http-proxy-middleware来解决跨域的问题
   npm install axios --save-dev
   cnpm install axios --save-dev
   npm install axios --save-dev http-proxy-middleware
   cnpm install axios --save-dev http-proxy-middleware
   src下面的main.js下面引用axios,axios不支持Vue.use(axios),所以 Vue.prototype.$axios = axios


