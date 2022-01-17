<template>
    <el-container>
        <navigation-bar />
        <router-view />
    </el-container>
</template>

<script lang="ts">
import { ElContainer } from 'element-plus'
import NavigationBar from './components/NavigationBar.vue'

export default {
    components: {
        ElContainer,
        NavigationBar,
    },
}
</script>

<style scoped>
.el-container {
    display: flex;
    flex-direction: column;
}
</style>
