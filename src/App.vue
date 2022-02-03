<template>
    <ProvideLanguage>
        <el-container>
            <navigation-bar />
            <router-view />
            <custom-footer />
        </el-container>
    </ProvideLanguage>
</template>

<script lang="ts">
import { ElContainer } from 'element-plus'
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'
import ProvideLanguage from './providers/Language'

export default {
    components: {
        ElContainer,
        NavigationBar,
        CustomFooter: Footer,
        ProvideLanguage,
    },
}
</script>

<style scoped>
.el-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #f9f9f9;
    overflow-y: hidden;
}

@media only screen and (max-width: 600px) {
    .el-container {
        width: 100%;
    }
}
</style>
