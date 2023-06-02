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
    <section class="trainings" id="formacion">
        <div class="trainings__text">
            
            <h2 class="trainings__text--title">
                {{ concept.title }}
            </h2>
            <div class="trainings__text--description">
                <p>
                    {{ concept.description}}
                </p>
            </div>
            <div v-for="card in concept.cards" class="container">
                <div class="card bg-light">
                    <div class="card-header"><h5 class="card-title">{{ card.cardTitle }}</h5></div>
                    <div class="card-body">
                        <p class="card-text trainings__text--description">{{ card.cardSubtitle }}</p>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <b-table striped hover :items="card.cardTable"></b-table>
                                </div>
                            </div>
                        </div>
                        <p class="card-text trainings__text--description"> <a href="{{ card.cardLink }}" target="_blank">{{ card.cardLink }}</a></p>
                    </div>
                </div>
                <p> </p>
            </div>
            
        </div>
    </section>
</template>

<script lang="ts">
import dataTraining from "../../assets/json/training.json";
import { inject, ref, Ref } from 'vue'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'

export default {
    name: 'Trainings',
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
    computed: {
        concept() {
            return dataTraining.trainings;
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';
.trainings {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    background: $grey-background;
    position: relative;
    height: calc(100vh - 410px);
    & .card-header {
        background-color: $green;
    }
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
            text-align: justify;
        }

        &--description {
            color: #222;
            font-size: 20px;
            line-height: 34px;
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
    .trainings {
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
    .trainings {
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