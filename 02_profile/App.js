import img from './src/a.jpg';
export default {
    template:`
        <div>
            <img :src="imgSrc">
</div>
    `,
    data:function () {
        return {
            imgSrc:img
        }
    }
}