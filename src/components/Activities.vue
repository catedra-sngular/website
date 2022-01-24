<template>
    <section class="activities" id="actividades">
        <div class="activities__text">
            <h1 class="activities__title">
                {{ locale.activities.title[0] }}
                <span>{{ locale.activities.title[1] }}</span>
            </h1>
            <p class="activities__subtitle">
                {{ locale.activities.subtitle }}
            </p>
            <p class="activities__description">
                {{ locale.activities.description[0] }}
                <a href="https://github.com/catedra-corunet" target="_blank">{{ locale.activities.description[1] }}</a>
                {{ locale.activities.description[2] }}
            </p>
        </div>
        <ul class="activities__list">
            <li class="activities__item">
                <span class="activities__item-text">
                    <el-icon><star-filled /></el-icon>
                    {{ locale.activities.kind[0] }}
                </span>
            </li>
            <li class="activities__item">
                <span class="activities__item-text">
                    <el-icon><share /></el-icon>
                    {{ locale.activities.kind[1] }}
                </span>
            </li>
            <li class="activities__item">
                <span class="activities__item-text">
                    <el-icon><opportunity /></el-icon>
                    {{ locale.activities.kind[2] }}
                </span>
            </li>
            <li class="activities__item">
                <span class="activities__item-text">
                    <el-icon><collection-tag /></el-icon>
                    {{ locale.activities.kind[3] }}
                </span>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { ElIcon } from 'element-plus'
import { CollectionTag, StarFilled, Share, Opportunity } from '@element-plus/icons-vue'
import { inject, ref, Ref } from 'vue'
import { ProvideLocaleKey, ProvideSetLanguageKey } from '@/providers/Language'

export default {
    name: 'Activities',
    components: { ElIcon, CollectionTag, StarFilled, Share, Opportunity },
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
.activities {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0% 10%;
    gap: 5%;
    font-family: 'Montserrat', sans-serif;
    color: var(--el-text-color-primary);

    &__text {
        max-width: 50%;
    }

    &__title {
        font-size: 55px;
        line-height: 1;

        & > span {
            color: rgba(236, 99, 40, 1);
            text-decoration: underline rgba(236, 99, 40, 0.6);
        }
    }

    &__subtitle {
        color: var(--el-text-color-secondary);
        font-size: 20px;
    }

    &__description {
        color: var(--el-text-color-secondary);
        font-size: 20px;

        & > a {
            color: rgba(236, 99, 40, 1);
            text-decoration: none;
        }
    }

    &__list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        column-gap: 3rem;
        list-style: none;
    }

    &__item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1rem;
        background-color: rgba(236, 99, 40, 0.6);
        padding: 1rem;
        border-radius: 13px;
        width: 100%;
    }

    &__item-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    &__item-number {
        text-align: right;
    }
}
</style>
