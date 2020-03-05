<template>
    <div class="com-b">
        component B

        <pop v-dom-portal="target" :message="msg"></pop>

        <button @click="changeMsg">change Msg</button>
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
                target: '#comA',

                msg: 'msg1'
            }
        },

        methods: {
            changeMsg() {
                this.msg = 'msg' + Math.random() * 10
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
