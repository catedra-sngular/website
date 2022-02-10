<!--
Copyright (C) 2022 Catedra Corunet polo Impulso da Ciencia Aberta
                   a través do Software

This program is free software: you can redistribute it and/or modify it 
under the terms of the GNU General Public License as published by the Free 
Software Foundation, either version 3 of the License, or (at your option) 
any later version.

This program is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS 
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with 
this program. If not, see <https://www.gnu.org/licenses/>. 
-->

<template>
    <section class="attributions" id="actividades">
        <div class="attributions__text">
            <h2 class="attributions__text--title">
                {{ locale.attributions.title }}
            </h2>
            <p class="attributions__text--description">
                <a href="https://vuejs.org/" target="_blank">{{ locale.attributions.project[0].name }}:</a>
                {{ locale.attributions.project[0].contribution }}
            </p>
            <p class="attributions__text--description">
                <a href="https://nodejs.org/es/" target="_blank">{{ locale.attributions.project[1].name }}:</a>
                {{ locale.attributions.project[1].contribution }}
            </p>
            <p class="attributions__text--description">
                <a href="https://element-plus.org/" target="_blank">{{ locale.attributions.project[2].name }}:</a>
                {{ locale.attributions.project[2].contribution }}
            </p>
            <p class="attributions__text--description">
                {{ locale.attributions.project[3].name }}:
                <a href="https://www.freepik.com/free-vector/white-abstract-background_11852424.htm" target="_blank">{{
                    locale.attributions.project[3].contribution[0]
                }}</a>
                {{ locale.attributions.project[3].contribution[1] }}
                <a href="https://www.freepik.com/" target="_blank">{{
                    locale.attributions.project[3].contribution[2]
                }}</a>
            </p>
            <p class="attributions__text--description">
                {{ locale.attributions.project[4].name }}:
                <a href="https://unsplash.com/photos/zZdxxAEhOYg" target="_blank">{{
                    locale.attributions.project[4].contribution[0]
                }}</a>
                {{ locale.attributions.project[4].contribution[1] }}
                <a
                    href="https://unsplash.com/@borre?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    target="_blank"
                    >{{ locale.attributions.project[4].contribution[2] }}</a
                >
                {{ locale.attributions.project[4].contribution[3] }}
                <a
                    href="https://unsplash.com/s/photos/coru%C3%B1a?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    target="_blank"
                    >{{ locale.attributions.project[4].contribution[4] }}</a
                >
            </p>
        </div>
    </section>
</template>

<script lang="ts">
import { inject, ref, Ref } from 'vue'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'

export default {
    name: 'Attributions',
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
.attributions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    background: $grey-background;
    position: relative;
    height: 100vh;

    &__text {
        position: absolute;
        left: 180px;
        top: 20px;
        width: 70%;

        &--title {
            font-size: 48px;
            line-height: 65px;
            width: 100%;
            color: #222;
        }

        &--subtitle {
            color: #222;
            font-size: 20px;
            line-height: 34px;
            width: 90%;
            text-align: justify;
        }

        &--description {
            color: #222;
            font-size: 20px;
            line-height: 34px;
            width: 90%;
            text-align: justify;
            transition: 0.4s ease;

            & > a {
                color: $green;
                text-decoration: none;
            }
        }
    }
}

@media only screen and (max-width: 1200px) {
    .attributions {
        &__text {
            left: 90px;
            top: 20px;

            &--title {
                font-size: 36px;
                line-height: 50px;
            }

            &--subtitle {
                font-size: 18px;
                line-height: 24px;
            }

            &--description {
                font-size: 18px;
                line-height: 24px;
            }
        }
    }
}

@media only screen and (max-width: 600px) {
    .attributions {
        &__text {
            left: 80px;
            top: 20px;

            &--title {
                font-size: 24px;
                line-height: 30px;
            }

            &--subtitle {
                font-size: 14px;
                line-height: 20px;
            }

            &--description {
                font-size: 14px;
                line-height: 20px;
            }
        }
    }
}
</style>
