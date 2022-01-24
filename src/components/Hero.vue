<template>
    <div class="hero">
        <div class="hero__image">
            <div class="hero__image--piti hidden-xs-only">
                <img src="/assets/images/sciencepitica.png" />
            </div>
            <div class="hero__image--blob hidden-xs-only">
                <img src="/assets/images/greenblob.png" />
            </div>
        </div>

        <div class="hero__text">
            <div>
                <h2 class="hero__text--title">La FIC y Corunet</h2>
                <h2 class="hero__text--subtitle">impulsando la ciencia abierta a través del software</h2>
            </div>
            <div class="hero__text--description">
                La Universidade da Coruña, la Facultad de Informática (FIC) y Corunet colaboramos para generar nuevas
                experiencias y potenciar actividades en los siguientes ámbitos:
            </div>
            <ul class="hero__text--list">
                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li>La docencia</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="hero__text--list-item">La formación</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="hero__text--list-item">La investigación</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="hero__text--list-item">La sociedad</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="hero__text--list-item">La comunidad</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="hero__text--list-item">La producción industrial</li>
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
    padding: 5% 10%;
    font-family: 'Montserrat', sans-serif;
    background: #ffffff;
    /* background: #222; */
    position: relative;
    /* background-image: url('../../public/assets/images/pic2test.jpeg'); */
    height: calc(100vh - 25vh);

    &__image {
        width: 50%;

        &--piti img {
            position: absolute;
            top: 120px;
            left: 270px;
            margin: auto;
            height: 570px;
            z-index: 100;
        }

        &--blob img {
            z-index: 0;
            height: 500px;
            position: absolute;
            top: 150px;
            left: 70px;
            margin: auto;
        }
    }

    &__text {
        position: absolute;
        right: 0;
        top: 190px;
        width: 45%;
        padding-right: 40px;

        &--title {
            font-size: 62px;
            font-weight: 900;
            color: #6dbfa2;
            margin: -30px 0;
        }

        &--subtitle {
            font-size: 42px;
            line-height: 65px;
            width: 95%;
            margin-bottom: 40px;
            color: #222;
            /* color: #e9e9e9; */
        }

        &--description {
            font-size: 20px;
            line-height: 34px;
            margin-bottom: 20px;
            color: #222;
            /* color: #e9e9e9; */
        }

        &--list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            line-height: 40px;
            color: #222;
            /* color: #e9e9e9; */
            font-weight: 600;
            list-style: none;
            padding: 0;
            width: 100%;
        }

        &--list-item {
            display: flex;
            flex-direction: row;
        }

        &--check {
            color: #6dbfa2;
            margin-right: 14px;
        }
    }
}
</style>
