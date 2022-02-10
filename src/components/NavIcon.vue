<template>
    <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
            <span></span>
        </label>

        <ul class="menu__box">
            <li>
                <a class="menu__item">
                    <div class="header__navigation--language-select">
                        <el-select v-model="selectedLanguage" class="m-2" placeholder="Idioma" @change="setLanguage">
                            <el-option
                                v-for="item in languageOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </a>
            </li>
            <li>
                <a class="menu__item" href="/#about-us">{{ locale.navbar.about_us }}</a>
            </li>
            <li>
                <a class="menu__item" href="/#objetivos">{{ locale.navbar.objectives }}</a>
            </li>
            <li>
                <a class="menu__item" href="/#actividades">{{ locale.navbar.activities }}</a>
            </li>
            <li>
                <a class="menu__item">
                    <div class="header__navigation--icons mobile">
                        <el-link :underline="false" href="https://github.com/catedra-corunet" target="_blank">
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
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { inject, ref, Ref } from 'vue'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'
import { ElOption, ElSelect } from 'element-plus'
export default {
    name: 'NavIcon',
    components: { ElSelect, ElOption },
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

<style>
@media screen and (max-width: 1125px) {
    .hamburger-menu {
        display: block;
    }
}

@media screen and (min-width: 1126px) {
    .hamburger-menu {
        display: none;
    }
}

.el-select__popper.el-popper.is-light.is-pure {
    z-index: 9999999 !important;
}

.header__navigation--icons.mobile {
    padding-left: 0;
}

#menu__toggle {
    opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
    left: 0 !important;
}
.menu__btn {
    position: fixed;
    top: 28px;
    left: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #616161;
    transition-duration: 0.25s;
}
.menu__btn > span::before {
    content: '';
    top: -8px;
}
.menu__btn > span::after {
    content: '';
    top: 8px;
}
.menu__box {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: #eceff1;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    transition-duration: 0.25s;
}
.menu__item {
    display: block;
    padding: 12px 24px;
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: 0.25s;
}
.menu__item:hover {
    background-color: #cfd8dc;
}
</style>
