<template>
    <div class="hero">
        <div class="hero__image hidden-xs-only">
            <img src="/assets/images/sciencepitica.png" />
        </div>
        <div class="hero__image-wave hidden-xs-only">
            <img src="/assets/images/wave.png" />
        </div>

        <div class="hero__text">
            <div>
                <h2 class="hero__title">La FIC y Corunet</h2>
                <h2 class="hero__subtitle">impulsando la ciencia abierta a través del software</h2>
            </div>
            <div class="hero__description">
                La Universidade da Coruña, la Facultad de Informática (FIC) y Corunet colaboramos para generar nuevas
                experiencias y potenciar actividades en los siguientes ámbitos:
            </div>
            <ul class="hero__list">
                <div class="hero__list-item">
                    <span class="hero__check">✓</span>
                    <li>La docencia</li>
                </div>

                <div class="hero__list-item">
                    <span class="hero__check">✓</span>
                    <li class="hero__list-item">La formación</li>
                </div>

                <div class="hero__list-item">
                    <span class="hero__check">✓</span>
                    <li class="hero__list-item">La investigación</li>
                </div>

                <div class="hero__list-item">
                    <span class="hero__check">✓</span>
                    <li class="hero__list-item">La sociedad</li>
                </div>

                <div class="hero__list-item">
                    <span class="hero__check">✓</span>
                    <li class="hero__list-item">La comunidad</li>
                </div>

                <div class="hero__list-item">
                    <span class="hero__check">✓</span>
                    <li class="hero__list-item">La producción industrial</li>
                </div>
            </ul>
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
    padding: 5% 10%;
    font-family: 'Montserrat', sans-serif;

    &__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 80px;
        margin-left: 420px;
    }

    &__title {
        font-size: 54px;
        font-weight: 800;
        color: #6dbfa2;
        margin: -30px 0;
    }

    &__subtitle {
        font-size: 42px;
        line-height: 65px;
        width: 95%;
        margin-bottom: 40px;
        color: rgb(49, 49, 49);
    }

    &__description {
        font-size: 20px;
        line-height: 34px;
        color: rgb(90, 90, 90);
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        line-height: 40px;
        color: #686868;
        font-weight: 600;
        list-style: none;
        padding: 0;
        width: 100%;
    }

    &__list-item {
        display: flex;
        flex-direction: row;
    }

    &__check {
        color: #6dbfa2;
        margin-right: 14px;
    }

    &__image img {
        height: 550px;
        z-index: 100;
        position: absolute;
        left: 280px;
        top: 190px;
    }

    &__image-wave img {
        position: absolute;
        top: 200px;
        left: 130px;
        z-index: 0;
        height: 500px;
        margin-right: 150px;
    }
}
</style>
