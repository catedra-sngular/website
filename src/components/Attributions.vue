<template>
    <div class="attributions">
        <el-collapse class="attributions__collapse" v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Tecnologías" name="1">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                    <el-table-column prop="name" label="Name" width="180" />
                    <el-table-column prop="address" label="Address" />
                </el-table>
                <div class="attributions__collapse__item">
                    Consistent with real life: in line with the process and logic of real life, and comply with
                    languages and habits that the users are used to;
                </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="2">
                <div>
                    Operation feedback: enable the users to clearly perceive their operations by style updates and
                    interactive effects;
                </div>
                <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="3">
                <div>Simplify the process: keep operating process simple and intuitive;</div>
                <div>
                    Definite and clear: enunciate your intentions clearly so that the users can quickly understand and
                    make decisions;
                </div>
                <div>
                    Easy to identify: the interface should be straightforward, which helps the users to identify and
                    frees them from memorizing and recalling.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="4">
                <div>
                    Decision making: giving advices about operations is acceptable, but do not make decisions for the
                    users;
                </div>
                <div>
                    Controlled consequences: users should be granted the freedom to operate, including canceling,
                    aborting or terminating current operation.
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script lang="ts" setup>
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<script lang="ts">
import { ElCollapse, ElTable } from 'element-plus'

import { ref } from 'vue'
const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
    console.log(val)
}

export default {
    name: 'Attributions',
    components: { ElCollapse, ElTable },
}
</script>

<style lang="scss">
.attributions {
    padding: 0% 10%;
    gap: 5%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: var(--el-text-color-primary);

    &__collapse {
        max-width: 150%;

        .el-collapse-item {
            &__header {
                font-size: 20px;
                line-height: 30px;
            }
        }

        &__item {
            font-size: 20px;
        }
    }

    &__title {
        font-size: 55px;
        line-height: 1;

        & > span {
            color: rgba(236, 99, 40, 1);
            text-decoration: underline rgba(236, 99, 40, 0.6);
        }
    }

    &__subtitle {
        color: var(--el-text-color-secondary);
        font-size: 20px;
    }

    &__description {
        color: var(--el-text-color-secondary);
        font-size: 20px;

        & > a {
            color: rgba(236, 99, 40, 1);
            text-decoration: none;
        }
    }

    &__list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        column-gap: 3rem;
        list-style: none;
    }

    &__item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1rem;
        background-color: rgba(236, 99, 40, 0.6);
        padding: 1rem;
        border-radius: 13px;
        width: 100%;
    }

    &__item-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    &__item-number {
        text-align: right;
    }
}
</style>
