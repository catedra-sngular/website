<template>
    <div class="hero">
            <div class="hero__image">
                    <div class="hero__image--piti">
                        <img src="/assets/images/sciencepitica.png" />
                    </div>

                <div class="hero__image--blob1">
                    <img src="/assets/images/blobpurple.png" />
                </div>
                <div class="hero__image--blob1">
                    <img src="/assets/images/bloblightpurple.png" />
                </div>

                <div class="hero__image--circle1">
                    <img src="/assets/images/circlelightpurple.png" />
                </div>
            </div>


            
        <div class="hero__text">
            <div class="hero__text--title">
                <h2 class="hero__text--title-main">{{ locale.hero.title[0] }}</h2>
                <h2 class="hero__text--title-science">{{ locale.hero.title[1] }}</h2>
                <h2 class="hero__text--title-main">{{ locale.hero.title[2] }}</h2>
                <h2 class="hero__text--title-software">{{ locale.hero.title[3] }}</h2>
            </div>
            <div class="hero__text--description">
                {{ locale.hero.description }}
            </div>
            <ul class="hero__text--list">
                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="nowrap">{{ locale.hero.items[0] }}</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="nowrap">{{ locale.hero.items[1] }}</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="nowrap">{{ locale.hero.items[2] }}</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="nowrap">{{ locale.hero.items[3] }}</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="nowrap">{{ locale.hero.items[4] }}</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="nowrap">{{ locale.hero.items[5] }}</li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { inject, ref, Ref } from 'vue'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'

export default {
    name: 'Hero',
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
.ei {
    display: flex;
}
.hero {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    background: #ffffff;
    position: relative;
    background-image: url('../../public/assets/images/pic5test.jpg');
    background-position: center;
    background-size: cover;
    height: 100vh;

    .nowrap {
        white-space: nowrap;
    }

    &__image {
        width: 40%;

        &--piti img {
            position: absolute;
            top: 120px;
            left: 230px;
            margin: auto;
            height: 570px;
            z-index: 100;
            /* transition: 0.6s ease; */
            transition: 1s ease;

            &:hover {
                transform: rotate(10deg);
                height: 610px;
            }
        }

        &--circle1 img {
            /*verde*/
            z-index: 0;
            height: 150px;
            position: absolute;
            top: 120px;
            left: 620px;
            margin: auto;
        }

        &--blob1 img {
            z-index: 0;
            height: 600px;
            position: absolute;
            top: 130px;
            left: 110px;
            margin: auto;
        }
    }

    &__text {
        position: absolute;
        right: 0;
        top: 120px;
        width: 45%;

        &--title-science {
            font-size: 50px;
            font-weight: 900;
            color: $green;
            margin: -30px 0;
            text-shadow: 1px 1px 2px rgb(82, 82, 82);
            transition: 0.4s ease-in-out;

            &:hover {
                transform: scale(1.1);
                margin-left: 36px;
            }
        }

        &--title-software {
            font-size: 52px;
            font-weight: 900;
            color: $orange;
            text-shadow: 1px 1px 2px rgb(82, 82, 82);
            font-size: 48px;
            line-height: 65px;
            margin-bottom: 40px;
            margin-left: 20px;
            transition: 0.4s ease-in-out;

            &:hover {
                transform: scale(1.1);
                margin-left: 36px;
            }
        }

        &--title-main {
            font-size: 48px;
            line-height: 65px;
            margin-bottom: 40px;
            color: #222;
            text-shadow: 1px 1px 2px rgb(82, 82, 82);
        }

        &--description {
            font-size: 20px;
            line-height: 34px;
            margin-bottom: 20px;
            margin-top: 60px;
            color: #222;
        }

        &--list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            line-height: 40px;
            color: #222;
            font-weight: 600;
            list-style: none;
            padding: 0;
            width: 100%;
        }

        &--list-item {
            display: flex;
            flex-direction: row;
            transition: 0.4s ease;

            &:hover {
                transform: scale(1.1);
            }
        }

        &--check {
            color: #6dbfa2;
            margin-right: 14px;
        }
    }
}

@media only screen and (max-width: 1125px) {
    h2 {
        margin:0;
        padding: 0;
    }
    
    .hero {
        flex-direction: column;

        &__image {
            &--piti img {
                position: absolute;
                top: 60px;
                left: 40%;
                margin: auto;
                height: 300px;
                z-index: 100;

                &:hover {
                    height: 350px;
                }
            }

            &--circle1 img {
                position: absolute;
                top: 60px; /**/
                left: 30%;
                margin: auto;
                height: 80px;
                z-index: 1;
            }

            &--blob1 img {
                height: 250px;
                top: 80px;
                left: 35%;
            }
        }

        &__text {
            width: 80%;
            margin: 250px 40px 10px 40px;

            &--title-main {
                margin: 0;
            }

            &--title-science {
                font-weight: 800;
                margin: 0;
            }

            &--title-software {
                font-weight: 800;
                margin:10px 0 40px 0;
                line-height: 32px;
            }
        }
    }


}

@media only screen and (max-width: 640px) {

    h2 {
        margin:0;
        padding: 0;
    }
    .hero {
        flex-direction: column;
        &__image {
            &--piti img {
                position: absolute;
                top: 60px;
                left: 40%;
                margin: auto;
                height: 300px;
                z-index: 100;

                &:hover {
                    height: 350px;
                }
            }

            &--circle1 img {
                position: absolute;
                top: 60px; /**/
                left: 30%;
                margin: auto;
                height: 80px;
                z-index: 1;
            }

            &--blob1 img {
                height: 250px;
                top: 80px;
                left: 35%;
            }
        }

        &__text {
            margin: 0;
            position: absolute;
            left: 50px;
            top: 360px;
            width: 90%;

            &--title-main {
                margin: 0;
                font-size: 28px;
            }

            &--title-science {
                font-size: 32px;
                font-weight: 800;
                margin: 0;
            }

            &--title-software {
                font-size: 32px;
                font-weight: 800;
                margin:0 0 40px 0;
                line-height: 32px;
            }

            &--subtitle {
                font-size: 30px;
                line-height: 50px;
                margin: 32px 0px;
            }

            &--description {
                font-size: 14px;
                line-height: 26px;
                margin-bottom: 0px;
                margin-top: -20px;
                color: #222;
            }

            &--list {
                grid-template-columns: repeat(1, 1fr);
                line-height: 30px;
                font-weight: 500;
                font-size: 14px;
            }

            &--list-item {
                white-space: nowrap;
            }

            &--check {
                margin-right: 12px;
            }
        }
    }
}
</style>
