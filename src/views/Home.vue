<template>
    <el-main>
        <hero />
    </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMain } from 'element-plus'
import Hero from '@/components/Hero.vue'

export default defineComponent({
    name: 'Home',
    components: { ElMain, Hero },
})
</script>

<style scoped>
.el-main {
    padding: 0;
}
</style>
