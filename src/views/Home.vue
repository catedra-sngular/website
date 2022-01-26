<template>
    <el-main>
        <hero />
        <objectives-carousel />
        <activities />
        <about-us />
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
    components: { ElMain, Hero, ObjectivesCarousel, Activities, AboutUs },
})
</script>

<style scoped>
.el-main {
    padding: 0;
}
</style>
