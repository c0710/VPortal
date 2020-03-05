<template>
    <div id="app">
        app
        <com-a></com-a>
        <com-b></com-b>
    </div>
</template>

<script>
    import comA from './components/comA';
    import comB from './components/comB';
    export default {
        name: "App",

        data() {
            return {}
        },

        components: {
            comA,
            comB
        }
    }
</script>

<style>
    body {
        width: 100%;
        height: 100%;
    }
    #app {
        width: 800px;
        height: 800px;
        background-color: #bec1c4;
        font-size: 18px;
        color: #12151d;
    }

</style>
