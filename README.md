# VPortal

> 在 Vue 项目中，我们使用模板来声明 dom 嵌套关系，然而有时候一些组件需要脱离固定的层级关系，不再受制与层叠上下文，比如说 Modal 和 Dialog 这种组件就希望能够脱离当前模板所在的层叠上下文。

## Usage

  ```
  
import Portal from './plugins/portal';

// ...

Vue.use(Portal);
  ```
  
  我们的组件结构如下：
  
```
// App.vue

<div id="app">
    app
    <com-a></com-a>
    <com-b></com-b>
</div>

```

```
// comA.vue

<div class="com-a" id="comA">
    component A
</div>

```
```
// comB.vue

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

```
> 可以看到在comB内部，我们可以控制将pop组件移出至其本身组件之外（comA）甚至根元素。 脱离固定的层级关系，不再受制与层叠上下文。
