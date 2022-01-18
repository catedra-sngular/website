<template>
    <div class="hero">
        <div class="hero__text">
            <div>
                <h1 class="hero__title">La FIC y Corunet</h1>
                <h2 class="hero__subtitle">impulsando la ciencia abierta a través del software</h2>
            </div>
            <div class="hero__description">
                La Universidade da Coruña, la Facultad de Informática (FIC) y Corunet colaboramos para generar nuevas
                experiencias y potenciar actividades en ámbitos como
            </div>
            <ul class="hero__list">
                <li>La docencia</li>
                <li>La formación</li>
                <li>La investigación</li>
                <li>La sociedad</li>
                <li>La comunidad</li>
                <li>La producción industrial</li>
            </ul>
        </div>
        <div class="hero__image hidden-xs-only">
            <img src="/assets/images/sciencepitica.png" />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Hero',
    components: {},
}
</script>

<style lang="scss">
.hero {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10%;
    padding: 0 10%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: var(--el-text-color-primary);
    height: 100vh;

    &__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__title {
        font-size: 70px;
        font-weight: bold;
        text-decoration: underline;
        line-height: 1;
        color: rgb(69, 52, 129);
        text-decoration: underline rgba(69, 52, 129, 0.6);
    }

    &__subtitle {
        font-size: 65px;
    }

    &__description {
        font-size: 30px;
    }

    &__list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        li {
            font-size: 20px;
            list-style: '✓ ';
        }
    }
}
</style>
