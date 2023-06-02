<!--
Copyright (C) 2022 Catedra Sngular polo Impulso da Ciencia Aberta
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
    <section class="contributions" id="actividades">
        <div class="contributions__text">
            <h2 class="contributions__text--title">
                {{ locale.contributions.title }}
            </h2>
            <p class="contributions__text--subtitle">
                {{ locale.contributions.subtitle }}
            </p>
            <p class="contributions__text--description">
                <a href="https://scholar.google.es/citations?user=E3EH-XEAAAAJ&hl=es&oi=ao" target="_blank"
                    >{{ locale.contributions.person[0].name }}:</a
                >
                {{ locale.contributions.person[0].contribution }}
            </p>
            <p class="contributions__text--description">
                <a href="https://github.com/Cris-ti-na" target="_blank">{{ locale.contributions.person[1].name }}:</a>
                {{ locale.contributions.person[1].contribution }}
            </p>
            <p class="contributions__text--description">
                <a href="https://github.com/Guillx" target="_blank">{{ locale.contributions.person[2].name }}:</a>
                {{ locale.contributions.person[2].contribution }}
            </p>
            <p class="contributions__text--description">
                <a href="https://github.com/JorgeMayoral" target="_blank">{{ locale.contributions.person[3].name }}:</a>
                {{ locale.contributions.person[3].contribution }}
            </p>
            <p class="contributions__text--description">
                <a href="https://github.com/RogelioBlancoP" target="_blank">{{ locale.contributions.person[4].name }}:</a>
                {{ locale.contributions.person[4].contribution }}
            </p>
            <p class="contributions__text--description">
                <a href="https://github.com/patypocando" target="_blank">{{ locale.contributions.person[5].name }}:</a>
                {{ locale.contributions.person[5].contribution }}
            </p>
            <p class="contributions__text--description">
                <a href="https://github.com/rubenmolina54" target="_blank"
                    >{{ locale.contributions.person[6].name }}:</a
                >
                {{ locale.contributions.person[6].contribution }}
            </p>
            <p class="contributions__text--description">
                <a href="https://github.com/sabelacv" target="_blank">{{ locale.contributions.person[7].name }}:</a>
                {{ locale.contributions.person[7].contribution }}
            </p>
        </div>
    </section>
</template>

<script lang="ts">
import { inject, ref, Ref } from 'vue'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'

export default {
    name: 'Contributions',
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
.contributions {
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
                color: $orange;
                text-decoration: none;
            }
        }
    }
}

@media only screen and (max-width: 1200px) {
    .contributions {
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
    .contributions {
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
