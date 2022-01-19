<template>
    <section class="activities" id="actividades">
        <div class="activities__text">
            <h1 class="activities__title">Queremos <span>tener impacto</span></h1>
            <p class="activities__subtitle">
                mediante la realización de actividades que contribuyan a lograr los objetivos de la cátedra
            </p>
            <p class="activities__description">
                En nuestro
                <a href="https://github.com/catedra-corunet" target="_blank">repositorio de Github</a> encontrarás de
                manera abierta todo lo relacionado con los proyectos que estamos llevando a cabo, desde esta misma web,
                hasta el resto de actividades que realicemos durante esta aventura
            </p>
        </div>
        <ul class="activities__list">
            <li class="activities__item">
                <span class="activities__item-text">
                    <el-icon><star-filled /></el-icon>
                    Actividades formativas
                </span>
                <span class="activities__item-number">0</span>
            </li>
            <li class="activities__item">
                <span class="activities__item-text">
                    <el-icon><share /></el-icon>
                    Transferencia de tecnología
                </span>
                <span class="activities__item-number">1</span>
            </li>
            <li class="activities__item">
                <span class="activities__item-text">
                    <el-icon><opportunity /></el-icon>
                    Investigación y desarrollo
                </span>
                <span class="activities__item-number">0</span>
            </li>
            <li class="activities__item">
                <span class="activities__item-text">
                    <el-icon><collection-tag /></el-icon>
                    Comunidad
                </span>
                <span class="activities__item-number">0</span>
            </li>
        </ul>
    </section>
</template>

<script>
import { ElIcon } from 'element-plus'
import { CollectionTag, StarFilled, Share, Opportunity } from '@element-plus/icons-vue'
export default {
    name: 'Activities',
    components: { ElIcon, CollectionTag, StarFilled, Share, Opportunity },
}
</script>

<style scoped>
.activities {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0% 10%;
    gap: 5%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: var(--el-text-color-primary);
}

.activities__text {
    max-width: 50%;
}

.activities__title {
    font-size: 55px;
    line-height: 0.5;
}

.activities__title > span {
    color: rgba(236, 99, 40, 1);
    text-decoration: underline rgba(236, 99, 40, 0.6);
}

.activities__subtitle {
    color: var(--el-text-color-secondary);
    font-size: 20px;
}

.activities__description {
    color: var(--el-text-color-secondary);
    font-size: 20px;
}

.activities__description > a {
    color: rgba(236, 99, 40, 1);
    text-decoration: none;
}

.activities__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    column-gap: 3rem;
    list-style: none;
}

.activities__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    background-color: rgba(236, 99, 40, 0.6);
    padding: 1rem;
    border-radius: 13px;
    width: 100%;
}

.activities__item-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
}

.activities__item-number {
    text-align: right;
}
</style>