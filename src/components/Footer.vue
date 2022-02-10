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
    <el-footer class="footer" height="min-content">
        <el-col class="footer__content">
            <el-row class="footer__links" :gutter="10" justify="start" align="top">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <el-row class="footer__title">
                        <span>{{ locale.footer.activities.title }}</span>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="/#formacion">{{ locale.footer.activities.training }}</el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="/#investigacion">
                            {{ locale.footer.activities.research }}
                        </el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="/#divulgacion">
                            {{ locale.footer.activities.outreach }}
                        </el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="/#transferencia">
                            {{ locale.footer.activities.transfer }}
                        </el-link>
                    </el-row>
                </el-col>
                <el-col :xs="12" :sm="6" :md="4" :lg="3" :xl="1">
                    <el-row>
                        <span class="footer__title">{{ locale.footer.social.title }}</span>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="https://discord.gg/ZCs9qenvMf">{{
                            locale.footer.social.discord
                        }}</el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="https://github.com/catedra-corunet">{{
                            locale.footer.social.github
                        }}</el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="https://twitter.com/CatedraCicas">{{
                            locale.footer.social.twitter
                        }}</el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="https://www.instagram.com/catedracicas/">{{
                            locale.footer.social.instagram
                        }}</el-link>
                    </el-row>
                </el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                    <el-row>
                        <span class="footer__title">{{ locale.footer.community.title }}</span>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="/attributions">
                            {{ locale.footer.community.attributions }}
                        </el-link>
                    </el-row>
                    <el-row>
                        <el-link :underline="false" href="/contributions">
                            {{ locale.footer.community.contributions }}
                        </el-link>
                    </el-row>
                </el-col>
            </el-row>
            <el-divider justify="center" :gutter="10">
                <img class="footer__logo" src="/assets/cicas-logo.svg" />
            </el-divider>
            <el-row justify="center" :gutter="10">
                <div class="footer__subtitle">
                    {{ locale.footer.love[0] }}
                    <img class="footer__icon" src="/assets/icons/purple-heart-icon.svg" />
                    {{ locale.footer.love[1] }}
                </div>
            </el-row>
        </el-col>
    </el-footer>
</template>

<script lang="ts">
import { ElFooter, ElRow, ElCol, ElLink, ElDivider } from 'element-plus'
import { inject, ref, Ref } from 'vue'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'

export default {
    name: 'Footer',
    components: { ElFooter, ElRow, ElCol, ElLink, ElDivider },
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
.el-col {
    height: auto !important;
    display: flex;
    flex-direction: column;
    height: 10rem;
    gap: 1rem;
}

.footer {
    display: flex;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    border-top: 1px solid var(--el-border-color-base);
    background: white;
    padding: 2rem 0;

    &__title {
        font-size: 18px;
        font-weight: bold;
        color: var(--el-text-color-primary);
        margin-bottom: 10px;
    }

    &__links {
        display: flex;
        align-items: flex-start;
        gap: 10%;
        margin-bottom: 1rem;
        margin-left: 0rem !important; // Overrides problem with the gutter property
        margin-right: 0rem !important;
        line-height: 28px;
        padding: 0rem 6rem;
    }

    &__logo {
        height: 4rem;
    }

    &__subtitle {
        text-align: center;
        font-size: 16px;
        color: var(--el-text-color-primary);
    }

    &__icon {
        height: 1rem;
    }
}

@media only screen and (max-width: 600px) {
    .footer {
        &__title {
            font-size: 16px;
            margin-top: 50px;
        }

        &__links {
            display: flex;
            justify-content: space-between;
            line-height: 28px;
            padding: 0rem 1.5rem;
            margin-bottom: 40px;
        }

        &__logo {
            height: 4rem;
        }

        &__subtitle {
            text-align: center;
            font-size: 14px;
            color: var(--el-text-color-primary);
        }

        &__icon {
            height: 0.8rem;
        }
    }
}
</style>
