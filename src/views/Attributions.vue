<template>
    <el-main>
        <attribution-list />
    </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMain } from 'element-plus'
import AttributionList from '@/components/community/AttributionList.vue'
import { event } from 'vue-gtag'

export default defineComponent({
    name: 'Attributions',
    components: { ElMain, AttributionList },
    beforeMount(){
        event('atribuciones', { method: 'Google' })
    },
})
</script>

<style lang="scss">
@import '@/styles/styles.scss';
.el-main {
    padding: 0;
}
</style>
