//基础的全局数据
let baseData = {};

//子组件
var Child = {
    template: ` <div class="child">
                    <div>
                        我是子组件
                    </div>
                    <div>
                        {{data}}
                    </div>
                    <div>
                        {{ceshi.xu}}
                        {{ceshi.ruo}}
                        {{ceshi.hai}}
                    </div>
                    <button @click="onChangeColor">我可以改变父元素的颜色</button>
                </div>`,
    data() {
        return {
            data: '帝国buff'
        }
    },
    props: {
        ceshi: {
            type: Object,
            default: {}
        }
    },
    methods: {
        onChangeColor() {
            this.$emit('color', 'green');
        }
    }
};

// 根组件
new Vue({
    el: '#app',
    data: {
        message: '攻占疫情，取得胜利',
        props: {
            xu: '111',
            ruo: '222',
            hai: '333',
        },
        flag: 0
    },
    methods: {
        onAlert() {
            alert('Welcome');
        },
        onChangeColor(params) {
            console.log(params);
            this.flag = 1;
        }
    },
    components: {
        Child
    }
})