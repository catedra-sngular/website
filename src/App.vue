<!--
Copyright (C) 2022 Catedra Sngular polo Impulso da Ciencia Aberta
                   a través do Software

This program is free software: you can redistribute it and/or modify it 
under the terms of the GNU General Public License as published by the Free 
Software Foundation, either version 3 of the License, or (at your option) 
any later version.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS 
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with 
this program. If not, see <https://www.gnu.org/licenses/>. 
-->

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
import { event } from 'vue-gtag'

export default {
    beforeMount(){
        event('home-page', { method: 'Google' })
    },
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
