<template>
    <section class="about-us" id="about-us">
        <h1 class="about-us__title">¿Quienes somos?</h1>

        <div class="about-us__cards">
            <div class="about-us__card">
                <div class="about-us__card--image">
                    <div class="about-us__card--logo-corunet">
                        <img src="/assets/images/logoCORUNET.svg" />
                    </div>
                </div>
                <div class="about-us__card--text">
                    <h3 class="about-us__card--text-title">Corunet</h3>
                    <p class="about-us__card--text-description">
                        Corunet es una empresa de A Coruña que se dedica a desarrollar soluciones tecnológicas para
                        grandes empresas.
                    </p>
                    <a class="about-us__card--link" href="https://coru.net/" target="_blank">Ver más</a>
                    <a href=""></a>
                </div>
            </div>

            <div class="about-us__card">
                <div class="about-us__card--image">
                    <div class="about-us__card--logo-udc">
                        <img src="/assets/images/00.png" />
                    </div>
                </div>
                <div class="about-us__card--text">
                    <h3 class="about-us__card--text-title">Universidade da Coruña</h3>
                    <p class="about-us__card--text-description">
                        Corunet es una empresa de A Coruña que se dedica a desarrollar soluciones tecnológicas para
                        grandes empresas.
                    </p>
                    <a class="about-us__card--link" href="https://www.udc.es/" target="_blank">Ver más</a>
                    <a href=""></a>
                </div>
            </div>

            <div class="about-us__card">
                <div class="about-us__card--image">
                    <div class="about-us__card--logo-fic">
                        <img src="/assets/images/logoFIC.png" />
                    </div>
                </div>
                <div class="about-us__card--text">
                    <h3 class="about-us__card--text-title">Facultade de Informática</h3>
                    <p class="about-us__card--text-description">
                        Corunet es una empresa de A Coruña que se dedica a desarrollar soluciones tecnológicas para
                        grandes empresas.
                    </p>
                    <a class="about-us__card--link" href="https://www.fic.udc.es/" target="_blank">Ver más</a>
                    <a href=""></a>
                </div>
            </div>
        </div>
        <!-- <div class="about-us__image">
            <div class="about-us__image--blob1">
                <img src="/assets/images/blobpurple.png" />
            </div>
            <div class="about-us__image--blob1">
                <img src="/assets/images/bloblightpurple.png" />
            </div>
            <div class="about-us__image--circle1">
                <img src="/assets/images/circlelightpurple.png" />
            </div>
        </div> -->
    </section>
</template>

<script lang="ts">
import { inject, ref, Ref } from 'vue'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'

export default {
    name: 'About Us',
    components: {},
    setup(): {
        selectedLanguage: Ref<string>
        languageOptions: { value: string; label: string }[]
        locale: unknown
        setLanguage: unknown
    } {
        const locale = inject(ProvideLocaleKey)
        const setLanguage = inject(ProvideSetLanguageKey)

        function getLanguage() {
            switch (localStorage.getItem('languageId')) {
                case 'GL':
                    return 'Galego'
                case 'ES':
                    return 'Español'
                case 'EN':
                    return 'English'
                default:
                    return 'Galego'
            }
        }

        const selectedLanguage = ref(getLanguage())
        const languageOptions = [
            {
                value: 'GL',
                label: 'Galego',
            },
            {
                value: 'ES',
                label: 'Español',
            },
            {
                value: 'EN',
                label: 'English',
            },
        ]

        return {
            selectedLanguage,
            languageOptions,
            locale,
            setLanguage,
        }
    },
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';
.about-us {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    position: relative;

    &__image {
        z-index: 0;

        &--blob1 img {
            height: 650px;
            width: 700px;
            position: absolute;
            top: 220px;
            left: 550px;
            margin: auto;
        }

        &--circle1 img {
            z-index: 0;
            height: 150px;
            position: absolute;
            top: 220px;
            right: 450px;
            margin: auto;
        }
    }

    &__title {
        font-size: 60px;
        color: $darkpurple;
        z-index: 1;
        margin-bottom: 150px;
        margin-top: 50px;
        font-weight: 900;
    }

    &__cards {
        display: flex;
        gap: 50px;
        margin-top: -70px;
        z-index: 1;
    }

    &__card {
        height: 500px;
        width: 360px;
        box-shadow: 4px 4px 6px rgb(199, 199, 199);
        padding: 10px;
        border-radius: 16px;
        z-index: 9;
        position: relative;
        background: linear-gradient(rgba(236, 236, 236, 0.753), rgb(255, 255, 255));
        border: 1px solid rgb(226, 226, 226);

        &--logo-corunet img {
            height: 260px;
            position: absolute;
            top: 0;
            left: 95px;
            z-index: 222;
        }

        &--logo-udc img {
            height: 120px;
            width: 220px;
            position: absolute;
            top: 60px;
            left: 80px;
            z-index: 222;
        }

        &--logo-fic img {
            height: 140px;
            position: absolute;
            top: 50px;
            left: 118px;
            z-index: 222;
        }

        &--text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 200px;
        }

        &--text-title {
            text-transform: uppercase;
            color: $lightpurple;
            font-size: 20px;
            margin: 0;
            margin-top: 60px;
            width: 90%;
            padding-bottom: 8px;
            border-bottom: 1px solid rgb(223, 223, 223);
        }

        &--text-description {
            font-size: 16px;
            line-height: 26px;
            margin: 0 auto;
            font-weight: 500;
            color: rgb(114, 114, 114);
            text-align: justify;
            padding: 0 20px;
            margin: 20px 0;
        }

        &--link {
            padding: 10px 50px;
            border: none;
            outline: none;
            margin-top: 20px;
            background: linear-gradient($darkpurple, $lightpurple);
            color: white;
            text-shadow: 0px 0px 1px white;
            font-size: 14px;
            text-transform: uppercase;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            letter-spacing: 1px;
            border-radius: 8px;
            text-decoration: none;
            transition: 0.3s ease-in-out;

            &:hover {
                background: linear-gradient($lightpurple, $darkpurple);
            }
        }
    }
}
</style>
