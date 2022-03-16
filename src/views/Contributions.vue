<template>
    <el-main>
        <contribution-list />
    </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMain } from 'element-plus'
import ContributionList from '@/components/community/ContributionList.vue'
import { event } from 'vue-gtag'

export default defineComponent({
    name: 'Contributions',
    components: { ElMain, ContributionList },
    beforeMount(){
        event('contribuciones', { method: 'Google' })
    },
})
</script>

<style lang="scss">
@import '@/styles/styles.scss';
.el-main {
    margin-top: 60px;
    padding: 0;
}
</style>
