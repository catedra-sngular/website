<template>
    <div class="hero">
        <div class="hero__image">
            <div class="hero__image--piti hidden-xs-only">
                <img src="/assets/images/sciencepitica.png" />
            </div>
            <div class="hero__image--circle1 hidden-xs-only">
                <img src="/assets/images/circlegreen.png" />
            </div>

            <div class="hero__image--circle2 hidden-xs-only">
                <img src="/assets/images/circlelightpurple.png" />
            </div>

            <div class="hero__image--circle3 hidden-xs-only">
                <img src="/assets/images/circleorange.png" />
            </div>

            <div class="hero__image--blob1 hidden-xs-only">
                <img src="/assets/images/bloblightpurple.png" />
            </div>
        </div>

        <div class="hero__text">
            <div class="hero__text--title">
                <h2 class="hero__text--subtitle">{{ locale.hero.title[0] }}</h2>
                <h2 class="hero__text--title-science">{{ locale.hero.title[1] }}</h2>
                <h2 class="hero__text--subtitle">
                    {{ locale.hero.title[2] }}
                    <span class="hero__text--title-software">{{ locale.hero.title[3] }}</span>
                </h2>
            </div>
            <div class="hero__text--description">
                {{ locale.hero.description }}
            </div>
            <ul class="hero__text--list">
                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li>{{ locale.hero.items[0] }}</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="hero__text--list-item">{{ locale.hero.items[1] }}</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="hero__text--list-item">{{ locale.hero.items[2] }}</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="hero__text--list-item">{{ locale.hero.items[3] }}</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="hero__text--list-item">{{ locale.hero.items[4] }}</li>
                </div>

                <div class="hero__text--list-item">
                    <span class="hero__text--check">✓</span>
                    <li class="hero__text--list-item">{{ locale.hero.items[5] }}</li>
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
.hero {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    background: #ffffff;
    position: relative;
    /* background-image: url('../../public/assets/images/pic2test.jpeg'); */
    height: 100vh;

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

        &--circle1 img {
            /*verde*/
            z-index: 0;
            height: 250px;
            position: absolute;
            bottom: 150px;
            left: 150px;
            margin: auto;
        }
        &--circle2 img {
            /*violeta*/
            z-index: 0;
            height: 500px;
            position: absolute;
            top: 300px;
            right: 1000px;
            margin: auto;
        }
        &--circle3 img {
            /*naranja*/
            z-index: 0;
            height: 400px;
            position: absolute;
            top: 130px;
            left: 120px;
            margin: auto;
        }
        &--blob1 img {
            /*naranja*/
            z-index: 0;

            position: absolute;
            top: 0px;
            right: 80px;
            margin: auto;
        }
    }

    &__text {
        position: absolute;
        right: 0;
        top: 120px;
        width: 45%;
        padding-right: 40px;

        &--title-science {
            font-size: 52px;
            font-weight: 900;
            color: $green;
            margin: -30px 0;
        }

        &--title-software {
            font-size: 52px;
            font-weight: 900;
            color: $orange;
            margin: -30px 0;
        }

        &--subtitle {
            font-size: 52px;
            line-height: 65px;
            width: 100%;
            margin-bottom: 40px;
            color: #222;
            /* color: #e9e9e9; */
        }

        &--description {
            font-size: 20px;
            line-height: 34px;
            margin-bottom: 20px;
            margin-top: 60px;
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
