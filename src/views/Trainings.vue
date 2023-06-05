<template>
    <el-main>
        <trainings-list/>
    </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElMain } from 'element-plus'
import TrainingsList from '@/components/activity/TrainingsList.vue'
import { event } from 'vue-gtag'

export default defineComponent({
    name: 'Trainings',
    components: { ElMain, TrainingsList },
    beforeMount(){
        event('trainings', { method: 'Google' })
    },
})
</script>

<style lang="scss">
@import '@/styles/styles.scss';
.el-main {
    padding: 0;
}
</style>
