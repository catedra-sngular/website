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
    <el-header>
        <nav-icon></nav-icon>
        <div class="header__logo">
            <el-link :underline="false" href="/"><img class="header__logo" src="/assets/cicas-logo.png" /></el-link>
        </div>
        <div class="header__navigation">
            <div class="header__navigation--links">
                <el-link :underline="false" v-scroll-to="'#about-us'">{{ locale.navbar.about_us }}</el-link>
                <el-link :underline="false" v-scroll-to="'#objetivos'">{{ locale.navbar.objectives }}</el-link>
                <el-link :underline="false" v-scroll-to="'#actividades'">{{ locale.navbar.activities }}</el-link>
            </div>

            <div class="header__navigation--icons">
                <el-link :underline="false" href="https://github.com/catedra-sngular" target="_blank">
                    <img class="header__navigation--icon" src="/assets/icons/github-icon.svg" />
                </el-link>
                <el-link :underline="false" href="https://discord.gg/ZCs9qenvMf" target="_blank">
                    <img class="header__navigation--icon" src="/assets/icons/discord-icon.svg" />
                </el-link>
                <el-link :underline="false" href="https://twitter.com/CatedraCicas" target="_blank">
                    <img class="header__navigation--icon" src="/assets/icons/twitter-icon.svg" />
                </el-link>
                <el-link :underline="false" href="https://www.instagram.com/catedracicas/" target="_blank">
                    <img class="header__navigation--icon" src="/assets/icons/instagram-icon.svg" />
                </el-link>
            </div>

            <div class="header__navigation--language-select">
                <el-select v-model="selectedLanguage" class="m-2" placeholder="Idioma" @change="setLanguage">
                    <el-option v-for="item in languageOptions" :key="item.value" :label="item.label"
                        :value="item.value"></el-option>
                </el-select>
            </div>
        </div>
    </el-header>
</template>

<script lang="ts">
import { inject, ref, Ref } from 'vue'
import NavIcon from './NavIcon.vue'
import { ElHeader, ElLink, ElSelect, ElOption } from 'element-plus'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'

export default {
    name: 'NavigationBar',
    components: { ElHeader, ElLink, ElSelect, ElOption, NavIcon },
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

.el-header {
    --el-header-padding: 0 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 62px;
    position: fixed;
    top: 0;
    background: $background;
    font-family: 'Montserrat', sans-serif;
    border-bottom: 1px solid var(--el-border-color-base);
    z-index: 99999;
}

.el-select-dropdown {
    &__item {
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
    }
}

.el-link.el-link--default {
    color: #222;
    font-family: 'Montserrat', sans-serif;
    margin-top: 3px;

    &:hover {
        color: #6dbfa2;
    }
}

.header {
    &__logo {
        z-index: -1;
        height: 50px;
        margin-bottom: 4px;
    }

    &__navigation {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;

        &--links {
            display: flex;
            gap: 2rem;
            margin-top: 3px;
            color: #222;

            &:hover {
                color: #6dbfa2 !important;
            }
        }

        &--icons {
            display: flex;
            gap: 2rem;
            padding: 0 2rem;
            margin-top: 3px;
        }

        &--icons img {
            height: 16px;
        }
    }
}

@media screen and (max-width: 1125px) {
    .header__navigation {
        display: none;
    }

    .header__logo {
        margin: auto auto 8px auto;
    }
}
</style>
