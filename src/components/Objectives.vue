<template>
    <section class="objectives" id="objetivos">
        <h1 class="objectives__title">Nuestros <span>objetivos</span></h1>
        <ul class="objectives__list">
            <li class="objectives__item">
                <span class="objectives__item-number">01</span>
                <h2 class="objectives__item-title">Software e I+D</h2>
                <p class="objectives__item-description">
                    Poner en valor la trascendencia que tiene el desarrollo de software como motor de la I+D+i en sus
                    diversos ámbitos.
                </p>
            </li>
            <li class="objectives__item">
                <span class="objectives__item-number">02</span>
                <h2 class="objectives__item-title">Transferencia efectiva</h2>
                <p class="objectives__item-description">
                    Apostar por la calidad, la sostenibilidad y la transferencia efectiva a la sociedad de las
                    herramientas de software empleadas en la investigación, contribuyendo a fomentar el nuevo paradigma
                    industrial 4.0.
                </p>
            </li>
            <li class="objectives__item">
                <span class="objectives__item-number">03</span>
                <h2 class="objectives__item-title">Ciencia abierta</h2>
                <p class="objectives__item-description">
                    Promover el código y la ciencia abiertas y la colaboración entre la comunidad de desarrollo de
                    software y la comunidad investigadora.
                </p>
            </li>
            <li class="objectives__item">
                <span class="objectives__item-number">04</span>
                <h2 class="objectives__item-title">Desde Galicia para el mundo</h2>
                <p class="objectives__item-description">
                    Contribuir a la consolidación de A Coruña como referente gallego, nacional e internacional en el
                    ámbito del desarrollo de software y de las tecnologías de la información.
                </p>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
export default {
    name: 'Objectives',
}
</script>

<style lang="scss">
.objectives {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    color: var(--el-text-color-primary);
    padding: 0% 10%;

    &__title {
        font-size: 60px;
    }

    &__title > span {
        color: rgb(109, 191, 162);
        text-decoration: underline rgba(109, 191, 162, 0.6);
    }

    &__list {
        display: flex;
        flex: row;
        list-style: none;
        gap: 2rem;
    }

    &__item {
        text-align: center;
    }

    &__item-number {
        background-color: rgba(109, 191, 162, 0.6);
        border-radius: 10px;
        font-size: 20px;
        font-weight: bold;
        padding: 1rem;
    }

    &__item-title {
        font-size: 25px;
    }

    &__item-description {
        color: var(--el-text-color-secondary);
        font-size: 16px;
    }
}
</style>
