<template>
    <el-main>
        <hero />
        <objectives-carousel />
        <activities />
    </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMain } from 'element-plus'
import Hero from '@/components/Hero.vue'
import ObjectivesCarousel from '@/components/ObjectivesCarousel.vue'
import Activities from '@/components/Activities.vue'

export default defineComponent({
    name: 'Home',
    components: { ElMain, Hero, ObjectivesCarousel, Activities },
})
</script>

<style scoped>
.el-main {
    padding: 0;
}
</style>
