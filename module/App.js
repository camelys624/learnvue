let app = {
    template: `
        <div>我是app组件</div>
    `
};
export let num1 = 1;    // 作为一整个对象的key导出，下同
let num2 = 2;
export {num2};
export default app;