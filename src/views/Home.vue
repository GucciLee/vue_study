<template>
    <div id="nav">
        <template>
            <router-link to="example">演示 Demo</router-link>
        </template>
    </div>
</template>

<script>
    export default {
        name: "Home"
    };
</script>

<style lang="less">
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>