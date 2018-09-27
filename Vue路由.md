####知识点介绍
- 路由meta元数据 -> meta是对于路由规则是否需要验证权限的配置
  - 路由对象中和name属性同级`{ meta:{isCHecked:true} }`
- 路由钩子 -> 权限控制的函数执行权限
  - 每次路由匹配后，渲染组件到router-view之前
  - ```router.beforeEach(function(to, from, next){ })```
####编程导航
1. 跳到指定的锚点，并显示页面`thi.$router.push({name:'xxx',query:{id:1},params:{name:'abc'}})`
2. 配置规则`{name:'xxx',path:'/xxx/:name'}`query会拼在冒号后面。
3. 根据历史记录前进或后退
    - `this.$router.go(-1|1)`(1)代表进一，(-1)代表退一，但是要有历史记录才行
