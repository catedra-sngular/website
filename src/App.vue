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
    width: 100%;
    background: #f9f9f9;
}
</style>
