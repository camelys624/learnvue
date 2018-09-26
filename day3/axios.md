#### 基本使用
``` javascript
Axios.method('url',[,...data],options)
.then(function(res){  })
.catch(function(err){ })
```
#### 合并请求
``` javascript
this.$axios.all([请求1，请求2])
.then(this.$axios.spread(function (res1,res2){

}))
```
#### 取消请求
``` javascript
const CancelToken = axios.CancelToken;
const source = CancelToken.source();  // 创建标识请求的源对象
this.source = source; // 将对象存储到组件
CancelToken: source.token;  // 请求的options属性
this.source.cancel(); // 取消到之前的那个请求

 
// 前端断点续传，    及时获取当前上传的文件大小，  存储起来
let file = <input type="file" />.files[0].splice(文件开始部分，文件结尾部分)
new FormData().append('File',file);
// 后台就是接收多次文件，往之前在接收到的文件上追加
```
#### 拦截器
- 请求拦截器:在发起请求之前，做的事
- 响应拦截器:在响应回来之后做的事
- 单请求配置options:`axios.post(url,data,options);`
- 全局配置defaults:`this.axios.defaults`
- config:**请求拦截器中的参数**
- response.config:**相应拦截器中的参数**
- options
    - baseURL基础URL路径
    - params查询字符串（对象）
    - transformRequest: `function(post请求传递的数据){}`转换请求体数据
    - transfoemResponse:`function(res){自己转换响应回来的数据}`转换响应体数据
    - headers 请求头信息
    - data 请求体数据
    - timeout 请求超时，请求以后一段时间内没有响应算是超时（毫秒）
