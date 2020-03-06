<template>
    <div class="com-b">
        component B

        <pop v-dom-portal="target" :message="msg"></pop>

        <button @click="changeMsg">change Msg</button>
        <button @click="changeTarget">change Target</button>
        <button @click="changeTargetToRoot">change Target to root</button>
    </div>
</template>

<script>
    import pop from '../components/pop';
    export default {
        name: "comB",
        components: {
            pop
        },

        data() {
            return {
                target: false,

                msg: 'msg1'
            }
        },

        methods: {
            // 切换pop组件所携带的值
            changeMsg() {
                this.msg = 'msg' + Math.random() * 10
            },

            // 将pop组件在当前组件内和comA组件内切换
            changeTarget() {
                this.target = this.target === false ? '#comA' : false;
            },

            // 将pop组件移到body下
            changeTargetToRoot() {
                this.target = true;
            }
        }
    }
</script>

<style scoped>
    .com-b {
        width: 300px;
        height: 300px;
        background-color: #6c1;
    }
</style>
