<template>
    <el-main>
        <hero />
        <objectives />
        <activities />
    </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMain } from 'element-plus'
import Hero from '@/components/Hero.vue'
import Objectives from '@/components/Objectives.vue'
import Activities from '@/components/Activities.vue'

export default defineComponent({
    name: 'Home',
    components: { ElMain, Hero, Objectives, Activities },
})
</script>

<style scoped>
.el-main {
    padding: 0;
}
</style>
