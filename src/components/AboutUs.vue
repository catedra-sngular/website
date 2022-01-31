<template>
    <section class="about-us" id="about-us">
        <h1 class="about-us__title">¿Quienes <span class="about-us__title--second">somos?</span></h1>

        <div class="about-us__cards">
            <div class="about-us__cards--card-wrap">
                <div class="about-us__cards--card-box">
                    <div class="about-us__cards--image">
                        <div class="about-us__cards--logo-corunet">
                            <img src="/assets/images/logoCORUNET.svg" />
                        </div>
                    </div>
                    <div class="about-us__cards--text">
                        <h3 class="about-us__cards--text-title">Corunet</h3>
                        <p class="about-us__cards--text-description">
                            Corunet es una empresa de A Coruña que se dedica a desarrollar soluciones tecnológicas para
                            grandes empresas.
                        </p>
                        <a class="about-us__cards--link" href="https://coru.net/" target="_blank">Ver más</a>
                        <a href=""></a>
                    </div>
                </div>
            </div>

            <div class="about-us__cards--card-wrap">
                <div class="about-us__cards--card-box">
                    <div class="about-us__cards--image">
                        <div class="about-us__cards--logo-udc">
                            <img src="/assets/images/00.png" />
                        </div>
                    </div>
                    <div class="about-us__cards--text">
                        <h3 class="about-us__cards--text-title">Universidade da Coruña</h3>
                        <p class="about-us__cards--text-description">
                            Corunet es una empresa de A Coruña que se dedica a desarrollar soluciones tecnológicas para
                            grandes empresas.
                        </p>
                        <a class="about-us__cards--link" href="https://www.udc.es/" target="_blank">Ver más</a>
                        <a href=""></a>
                    </div>
                </div>
            </div>

            <div class="about-us__cards--card-wrap">
                <div class="about-us__cards--card-box">
                    <div class="about-us__cards--image">
                        <div class="about-us__cards--logo-fic">
                            <img src="/assets/images/logoFIC.png" />
                        </div>
                    </div>
                    <div class="about-us__cards--text">
                        <h3 class="about-us__cards--text-title">Facultade de Informática</h3>
                        <p class="about-us__cards--text-description">
                            Corunet es una empresa de A Coruña que se dedica a desarrollar soluciones tecnológicas para
                            grandes empresas.
                        </p>
                        <a class="about-us__cards--link" href="https://www.fic.udc.es/" target="_blank">Ver más</a>
                        <a href=""></a>
                    </div>
                </div>
            </div>
        </div>
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
    background-image: url('../../public/assets/images/pic5test.jpg');
    background-position: center;
    background-size: cover;

    &__title {
        font-size: 60px;
        color: $lightpurple;
        z-index: 1;
        margin-bottom: 80px;
        margin-top: 30px;
        font-weight: 900;
        transition: 0.4s ease;

        &--second {
            color: $darkpurple;
        }

        &:hover {
            transform: scale(1.2);
        }
    }

    &__cards {
        display: flex;
        gap: 70px;

        &--card-wrap {
            width: 340px;
            height: 500px;
            position: relative;
            transition: all 0.6s ease-out;
        }

        &--card-wrap:hover {
            transition: all 0.3 linear;
            transform: scale(1.08);
        }

        &--card-box {
            width: 100%;
            height: 100%;
            padding: 10px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-around;
            text-align: center;
            color: white;
            background: linear-gradient(rgba(69, 52, 129, 0), rgba(140, 127, 181, 0.3));
            border: 1px solid rgba(184, 184, 184, 0.459);
            border-radius: 50px 0px 50px 50px;
            box-shadow: 4px 4px 6px rgb(180, 180, 180);
            z-index: 9;
            transform: rotateX(0deg) rotateY(0deg);
            transform-style: preserve-3d;
            transition: all 0.6s ease-out;
            backdrop-filter: blur(4px);
            cursor: pointer;

            &:hover {
                box-shadow: 8px 8px 8px rgb(180, 180, 180);
                background: linear-gradient(rgba(69, 52, 129, 0.09), rgba(140, 127, 181, 0.3));
            }
        }

        &--logo-corunet img {
            height: 260px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: -10px auto;
            z-index: 222;
        }

        &--logo-udc img {
            height: 120px;
            width: 200px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 50px auto;
            z-index: 222;
        }

        &--logo-fic img {
            height: 130px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 50px auto;
            z-index: 222;
        }

        &--text {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-top: 200px;
        }

        &--text-title {
            text-transform: uppercase;
            color: $lightpurple;
            font-size: 18px;
            display: flex;
            justify-content: left;
            margin: 0;
            width: 90%;
            font-weight: 500;
            padding-bottom: 8px;
            border-bottom: 1px solid rgb(182, 182, 182);
        }

        &--text-description {
            font-size: 16px;
            line-height: 26px;
            margin: 0 auto;
            font-weight: 400;
            color: rgb(99, 99, 99);
            text-align: justify;
            padding: 0 20px;
            margin: 20px 0;
        }

        &--link {
            padding: 10px 50px;
            border: none;
            outline: none;
            margin-top: 20px;
            background: linear-gradient(rgba(69, 52, 129, 0.76), rgb(140, 127, 181));
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
                background: linear-gradient(rgb(140, 127, 181), rgba(69, 52, 129, 0.76));
            }
        }
    }
}

@media only screen and (max-width: 600px) {
    .about-us {
        height: auto;

        &__title {
            font-size: 32px;
            margin: 80px 0;

            &--second {
                color: $darkpurple;
            }
        }

        &__cards {
            display: flex;
            flex-direction: column;
            margin-bottom: 80px;
            gap: 50px;

            &--card-wrap {
                width: 75%;
                height: 410px;
                margin: 0 40px;
                position: relative;
                transition: all 0.6s ease-out;
            }

            &--card-wrap:hover {
                transition: all 0.3 linear;
                transform: scale(1);
            }

            &--card-box {
                box-shadow: 2px 2px 6px rgb(180, 180, 180);
            }

            &--logo-corunet img {
                height: 210px;
                margin: 0px auto;
            }

            &--logo-udc img {
                height: 100px;
                width: 170px;
            }

            &--logo-fic img {
                height: 100px;
            }

            &--text {
                margin-top: 175px;
            }

            &--text-title {
                font-size: 16px;
                padding-bottom: 6px;
            }

            &--text-description {
                font-size: 14px;
                line-height: 26px;
            }

            &--link {
                padding: 10px 40px;
                margin-top: 10px;
                font-size: 12px;
                font-weight: 500;

                &:hover {
                    background: linear-gradient($lightpurple, $darkpurple);
                }
            }
        }
    }
}
</style>
