<template>
    <el-main>
        <hero />
        <objectives-carousel />
    </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMain } from 'element-plus'
import Hero from '@/components/Hero.vue'
import ObjectivesCarousel from '@/components/ObjectivesCarousel.vue'

export default defineComponent({
    name: 'Home',
    components: { ElMain, Hero, ObjectivesCarousel },
})
</script>

<style scoped>
.el-main {
    padding: 0;
}
</style>
