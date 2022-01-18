<template>
    <el-container>
        <navigation-bar />
        <router-view />
        <custom-footer />
    </el-container>
</template>

<script lang="ts">
import { ElContainer } from 'element-plus'
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'

export default {
    components: {
        ElContainer,
        NavigationBar,
        CustomFooter: Footer,
    },
}
</script>

<style scoped>
.el-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
}
</style>
