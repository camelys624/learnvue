// Vue生命周期
/*
* beforeCreate
* created
* beforeMount
* mounted
* beforeUpdate
* updated
* activated
* deactivated
* beforeDestroy
* destroyed
*/
let Test = {
    template:`
            <div>我是test组件{{text}}<button @click="text=text+'change'">change</button></div>
        `,
    data:function (){
        return {
            text:'hello world'
        }
    },

    beforeCreate:function () {
        // 组件创建之前
        console.log('beforeCreate');
        // console.log(this.text);
    },
    created:function () {
        // 组件创建之后
        console.log('created');
        // console.log(this.text);
    },
    // 只要使用该组件，就会触发以上的事件(钩子函数)
    // create中可以操作数据....并且可以使现Vue->html的影响，
    // 应用：发起ajax请求
   /* beforeMount:function () {
        // Vue起作用，装载数据到DOM之前
        // console.log(document.body.innerHTML);
        console.log('beforeMount');
    },
    mounted:function () {
        // Vue装载数据之后
        // console.log(document.body.innerHTML);
        console.log('mounted');
    },

    // 以下两个基于数据改变，影响页面
    beforeUpdate:function () {  // 改变前
        console.log(document.body.innerHTML);
    },
    updated:function () {    // 改变后
        console.log(document.body.innerHTML);
    },*/
    // 以上两个是当有更改数据才会触发
    // 应用：beforeUpdate可以获取原DOM
    // Updated 可以获取新DOM

    // beforeMount 是Vue启动前的DOM
    // mounted 是Vue启动后的DOM  只只执行一次
    activated:function (){
        console.log('组件被激活了！');
    },
    deactivated:function (){
        console.log('组件被停用！')
    },
    // beforeDestroy和activated 都是v-if = true 子组件的状态出现
    // created 是没有<keep-alive>内置组件包裹的时候调用，activated是有<keep-alive>包裹的时候调用
    // 销毁同上

    // 对应父组件v-if false 就销毁当前组件
    beforeDestroy:function () { // 销毁之前
        console.log('beforeDestroy');
        console.log(this.text);
    },
    destroyed:function () { // 销毁后
        console.log('destroyed');
        console.log(this.text);
    },
    // 销毁，最终都是做一些其他功能的施放，比如:保存到localStorage
};
let App = {
    components:{
        test:Test
    },
    data:function (){
      return {
          isExist:true
      }
    },
    template:`
            <div>
            <keep-alive>  
                <test v-if="isExist"></test>
            </keep-alive>
            <button @click="isExist = !isExist">生命周期</button>
</div>
        `
};
new Vue({
    el:'#app',
    components:{
        app:App
    },
    template:'<app/>'
});