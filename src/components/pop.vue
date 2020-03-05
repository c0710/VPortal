<template>
    <div class="pop-msg">{{message}}</div>
</template>

<script>
    export default {
        name: "pop",

        props: {
            message: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped>
    .pop-msg {
        width: 100px;
        height: 100px;
        border: 1px solid #fff;
        border-radius: 6px;
        background-color: #6ddfff;
    }
</style>
