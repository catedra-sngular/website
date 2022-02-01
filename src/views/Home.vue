<template>
    <el-main>
        <hero />
        <about-us />
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
import AboutUs from '@/components/AboutUs.vue'

export default defineComponent({
    name: 'Home',
    components: { ElMain, Hero, AboutUs, ObjectivesCarousel, Activities },
})
</script>

<style scoped>
.el-main {
    padding: 0;
}
</style>
