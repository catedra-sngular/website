<template>
    <section class="objectives" id="objetivos">
        <h1 class="objectives__title">Nuestros <span>objetivos</span></h1>
        <div class="objectives__carousel">
            <el-carousel :interval="5000" type="card" height="300px">
                <el-carousel-item class="objectives__item__galicia">
                    <h2>De A Coruña para el mundo</h2>
                    <p>
                        Desde nuestro rinconcito del Atlántico, intentamos contribuir a una comunidad cada vez más
                        global
                    </p>
                </el-carousel-item>
                <el-carousel-item class="objectives__item__transfer">
                    <h2>Impulsando la transferencia</h2>
                    <p>
                        Buscamos promover la transferencia efectiva a la sociedad del software empleado en la
                        investigación
                    </p>
                </el-carousel-item>
                <el-carousel-item class="objectives__item__open-science">
                    <h2>Apostando por la Ciencia Abierta</h2>
                    <p>
                        Queremos potenciar el acceso universal a la ciencia y fomentar la colaboración entre comunidades
                    </p>
                </el-carousel-item>
                <el-carousel-item class="objectives__item__software">
                    <h2>I+D <img class="objectives__icon" src="/assets/icons/heart-icon.svg" /> Software</h2>
                    <p>
                        Creemos en la importancia del buen software para impulsar la investigación, el desarrollo y la
                        innovación
                    </p>
                </el-carousel-item>
            </el-carousel>
        </div>
    </section>
</template>

<script lang="ts">
import { ElCarousel } from 'element-plus'

export default {
    name: 'Objectives',
    components: { ElCarousel },
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';
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
        color: $lightpurple;
    }

    &__title > span {
        color: $darkpurple;
        text-decoration: underline $darkpurple;
    }

    &__item {
        text-align: center;
        &__galicia {
            background-color: $darkpurple;
        }
        &__transfer {
            background-color: $lightpurple;
        }
        &__open-science {
            background-color: $green;
        }
        &__software {
            background-color: $orange;
        }
    }

    &__carousel {
        width: 100%;
    }

    &__carousel-item {
        text-align: center;
    }

    &__icon {
        height: 18px;
    }
}

.el-carousel__item {
    & > h2 {
        color: #ffffff;
        font-size: 30px;
        opacity: 0.9;
        line-height: 50px;
        height: 100px;
        margin: 30px;
        text-align: center;
    }
    & > p {
        color: #ffffff;
        font-size: 18px;
        opacity: 0.9;
        line-height: 30px;
        height: 100px;
        margin: 30px;
        text-align: center;
    }
}
</style>
